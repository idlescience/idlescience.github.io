import fs from 'fs';
import { promisify } from 'util';
import { rowechform, binrank, A_mx } from './common';
import GLPK from 'glpk.js';

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);

function PD(
    disp: boolean,
    n: number,
    v: number[],
    iter: number,
    piv: number,
    sr: number,
    t: number,
    x: number[],
    s: number,
    nlsu: boolean
) {
    let prec = Math.pow(10, -6);
    let unsettled: boolean[] = Array(s + 1).fill(true);
    unsettled[s] = false;

    let t1 = Date.now();

    let A: boolean[][] = Array(s + 1).fill(Array(n).fill(false));
    A_mx(A, n, s);

    let singleton_bounds: number[] = Array(n).fill(0);
    let impu = 0;
    for (let i = 0; i < n; i++) {
        singleton_bounds[i] = v[Math.pow(2, i) - 1];
        impu += singleton_bounds[i];
    }

    for (let i = 0; i < n; i++) {
        x[i] = singleton_bounds[i] + (v[s] - impu) / n;
    }

    let unsettled_p: boolean[] = Array(n).fill(true);

    let Arref: number[][] = Array(n).fill(Array(n).fill(0));
    Arref[0] = Array(n).fill(1);

    let J: boolean[] = Array(n).fill(true);
    J[0] = false;

    let rank = 1;

    let Asettled: boolean[][] = Array(n).fill(Array(n).fill(false));
    let settled_values: number[] = Array(n).fill(0);
    settled_values[0] = v[s];

    let epsi = 0;



    const glpk = GLPK();

    const options = {
        msglev: glpk.GLP_MSG_ALL,
        presol: true,
        cb: {
            call: (progress: string) => console.log(progress),
            each: 1,
        },
    };

    // Add variables
    let vars: { name: string; coef: number }[] = [];
    for (let i = 0; i < n + 1; i++) {
        vars[i] = lp.addVariable('x' + i, -Infinity, Infinity);
    }

    // Set objective function
    lp.setObjective({
        direction: glpk.GLP_MIN,
        name: 'obj',
        vars: [
            // Assuming that you want to minimize X[n]
            { name: 'x' + n, coef: 1.0 },
        ],
    });

    // Add constraints
    for (let i = 0; i < s; i++) {
        let constraint: {
            name: string;
            vars: { name: string; coef: number }[];
            bnds: { type: any; ub: number; lb: number };
        } = { name: 'c' + i, vars: [], bnds: { type: glpk.GLP_LO, ub: v[i], lb: 0 } };

        for (let j = 0; j < n; j++) {
            if (A[i][j]) {
                constraint.vars.push({ name: 'x' + j, coef: 1.0 });
            }
        }

        constraint.vars.push({ name: 'x' + n, coef: 1.0 });

        lp.addRow(constraint);
    }

    // Solve the problem
    glpk.Problem.simplex(lp, {});

    // Extract the solution
    for (let i = 0; i < n; i++) {
        x[i] = glpk.Problem.getColPrim(lp, vars[i]);
    }

    epsi = glpk.Problem.getColPrim(lp, vars[n]);

    if (disp) {
        console.log('Least core solution:');
        for (let i = 0; i < n; i++) {
            console.log(x[i]);
        }
        console.log('Least core value: ', epsi);
    }

    for (let i = 0; i < s; i++) {
        if (unsettled[i]) {
            if (lp.getDual(unsett_ineq[i]) > prec) {
                if (binrank(Arref, J, A[i], n)) {
                    rank++;
                    if (disp) console.log(`Dual: lambda_${i + 1} > 0, rank = ${rank} (${s - i} settled as well)`);
                    if (rank === n) {
                        t = Date.now() - t1;
                        if (disp) console.log('Rank condition satisfied!');
                        console.log('finished!');
                        return;
                    }
                    rowechform(Arref, J, A[i], n, rank);
                    Asettled[rank - 1] = A[i];
                    settled_values[rank - 1] = v[i] - epsi;
                    if (disp) console.log(`SETTLED: ${i + 1} at ${v[i] - epsi}`);
                }
                unsettled[i] = false;
                unsettled[s - 1 - i] = false;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (unsettled_p[i]) {
            if (lp.getDual(impu_constr[i]) > prec) {
                if (binrank(Arref, J, A[Math.pow(2, i) - 1], n)) {
                    rank++;
                    if (disp)
                        console.log(
                            `Dual: lambda_impu${i + 1} > 0, rank = ${rank} (${s - Math.pow(2, i)} settled as well)`
                        );
                    if (rank === n) {
                        t = Date.now() - t1;
                        if (disp) console.log('Rank condition satisfied!');
                        console.log('finished!');
                        return;
                    }
                    rowechform(Arref, J, A[Math.pow(2, i) - 1], n, rank);
                    Asettled[rank - 1] = A[Math.pow(2, i) - 1];
                    settled_values[rank - 1] = v[Math.pow(2, i) - 1];
                    if (disp) console.log(`SETTLED: ${Math.pow(2, i)} at ${v[Math.pow(2, i) - 1]}`);
                }
                unsettled[Math.pow(2, i) - 1] = false;
                unsettled[s - Math.pow(2, i)] = false;
                unsettled_p[i] = false;
            }
        }
    }

    if (disp) {
        console.log('\n   ---===   FIRST LP SOLVED   ===---   \n');
    }

    let xS = 0;
    while (rank < n) {
        ({ s, xS, n, epsi, prec, rank, disp, iter, piv, sr, nlsu } = iteration(
            unsettled,
            s,
            xS,
            n,
            A,
            x,
            v,
            epsi,
            prec,
            Arref,
            J,
            rank,
            disp,
            Asettled,
            settled_values,
            iter,
            piv,
            sr,
            unsettled_p,
            singleton_bounds,
            nlsu
        ));
    }

    t = Date.now() - t1;
    console.log('PD finished!');
    console.log('The nucleolus solution:');
    for (let i = 0; i < n; i++) {
        console.log(x[i]);
    }
    console.log('Time needed: ', t, ' milliseconds');
    console.log('Iterations needed: ', iter);
    console.log('Pivots needed: ', piv);
    console.log('Subroutine solves needed: ', sr);
}

function iteration(
    unsettled: boolean[],
    s: number,
    xS: number,
    n: number,
    A: boolean[][],
    x: number[],
    v: number[],
    epsi: number,
    prec: number,
    Arref: number[][],
    J: boolean[],
    rank: number,
    disp: boolean,
    Asettled: boolean[][],
    settled_values: number[],
    iter: number,
    piv: number,
    sr: number,
    unsettled_p: boolean[],
    singleton_bounds: number[],
    nlsu: boolean
): {
    s: number;
    xS: number;
    n: number;
    epsi: number;
    prec: number;
    rank: number;
    disp: boolean;
    iter: number;
    piv: number;
    sr: number;
    nlsu: boolean;
} {
    let env = new IloEnv();
    let model = new IloModel(env);
    let X = new IloNumVarArray(env, n + 1, -IloInfinity, IloInfinity);
    let obj = new IloExpr(env);
    obj = X[n];
    let T: boolean[] = new Array(s).fill(false);
    let T_coord: number[] = [];
    let t_size = 0;
    let T2: boolean[] = new Array(n).fill(false);
    let T2_coord: number[] = [];
    let t2_size = 0;

    for (let i = 0; i < s; i++) {
        if (unsettled[i]) {
            xS = 0;
            for (let j = 0; j < n; j++) {
                if (A[i][j]) xS += x[j];
            }
            if (Math.abs(v[i] - xS - epsi) < prec) {
                T[i] = true;
                T_coord.push(i);
                t_size++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (unsettled_p[i]) {
            if (Math.abs(x[i] - singleton_bounds[i]) < prec) {
                T2[i] = true;
                T2_coord.push(Math.pow(2, i) - 1);
                t2_size++;
            }
        }
    }

    if (disp) {
        console.log('Tight coalitions:');
        for (let i = 0; i < t_size; i++) console.log(T_coord[i] + 1);

        if (t2_size > 0) {
            console.log('T0:');
            for (let i = 0; i < t_size; i++) console.log(T2_coord[i] + 1);
        }
    }

    let Atight: boolean[][] = Array.from({ length: t_size }, () => Array(n).fill(false));
    let l = 0;
    for (let i = 0; i < t_size; i++) Atight[i] = A[T_coord[i]];

    let Atight2: boolean[][] = Array.from({ length: t2_size }, () => Array(n).fill(false));
    for (let i = 0; i < t2_size; i++) Atight2[i] = A[T2_coord[i]];

    let U: boolean[] = new Array(t_size).fill(true);
    let U2: boolean[] = new Array(t2_size).fill(true);

    ({ prec, n, t_size, t2_size, rank, disp, sr, s, epsi } = subroutine(
        U,
        U2,
        Atight,
        Atight2,
        Arref,
        J,
        prec,
        n,
        t_size,
        t2_size,
        rank,
        disp,
        Asettled,
        sr,
        settled_values,
        unsettled,
        T_coord,
        s,
        epsi,
        v,
        T2_coord
    ));

    if (disp) {
        console.log('\n---===   SUBROUTINE FINISHED   ===---\n');
        console.log('MIN TIGHT SET FOUND!');
        for (let i = 0; i < t_size; i++) {
            if (!U[i]) console.log(T_coord[i] + 1);
        }
        console.log('\n');
    }

    if (rank == n)
        return {
            s,
            xS,
            n,
            epsi,
            prec,
            rank,
            disp,
            iter,
            piv,
            sr,
            nlsu,
        };

    if (disp) console.log('Rank increased to: ', rank);

    if (!nlsu) {
        for (let i = 0; i < s; i++) {
            if (unsettled[i]) {
                if (!binrank(Arref, J, A[i], n)) {
                    unsettled[i] = false;
                    unsettled[s - 1 - i] = false;
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (unsettled_p[i] == true && unsettled[Math.pow(2, i) - 1] == false) unsettled_p[i] = false;
    }

    let eq = [];
    let unsett_ineq = [];
    let impu_constr = [];

    for (let i = 0; i < s; i++) {
        if (unsettled[i]) {
            let ineq = [];
            for (let j = 0; j < n; j++) {
                if (A[i][j]) ineq.push(X[j]);
            }
            ineq.push(X[n]);
            unsett_ineq[i] = ineq >= v[i];
        }
    }

    model.add(unsett_ineq);

    for (let i = 1; i < rank; i++) {
        let settled = [];
        for (let j = 0; j < n; j++) {
            if (Asettled[i][j]) settled.push(X[j]);
            if (i == 1) {
                eq.push(X[j]);
                if (unsettled_p[j]) impu_constr[j] = X[j] >= singleton_bounds[j];
            }
        }
        let sett_ineq = settled == settled_values[i];
        model.add(sett_ineq);
    }

    model.add(impu_constr);
    let r = eq == v[s];
    model.add(r);
    model.add(IloMinimize(env, obj));

    let lp = new IloCplex(model);
    lp.setParam(IloCplex.Param.RootAlgorithm, 1);
    lp.setParam(IloCplex.Param.Preprocessing.Presolve, 0);

    if (!disp) lp.setOut(env.getNullStream());
    else console.log('\n---===   SOLVING THE ' + (iter + 1) + '-TH LP   ===---\n');

    let x_val = new IloNumArray(env, n + 1);

    for (let i = 0; i < n; i++) x_val[i] = x[i];

    x_val[n] = epsi;
    lp.setStart(x_val, null, X, null, null, null);
    lp.solve();

    piv += lp.getNiterations();
    iter++;

    for (let i = 0; i < n; i++) x[i] = lp.getValue(X[i]);

    epsi = lp.getValue(X[n]);

    if (disp) {
        console.log('New solution point:');
        for (let i = 0; i < n; i++) console.log(x[i]);
        console.log('Epsilon: ', epsi);
    }

    for (let i = 0; i < s; i++) {
        if (unsettled[i]) {
            if (lp.getDual(unsett_ineq[i]) > prec) {
                if (binrank(Arref, J, A[i], n)) {
                    rank++;
                    if (disp) console.log(`Dual: lambda_${i + 1} > 0, rank = ${rank} (${s - i} settled as well)`);
                    if (rank == n) {
                        if (disp) console.log('Rank condition satisfied!');
                        return {
                            s,
                            xS,
                            n,
                            epsi,
                            prec,
                            rank,
                            disp,
                            iter,
                            piv,
                            sr,
                            nlsu,
                        };
                    }
                    rowechform(Arref, J, A[i], n, rank);
                    Asettled[rank - 1] = A[i];
                    settled_values[rank - 1] = v[i] - epsi;
                    if (disp) console.log(`SETTLED: ${i + 1} at ${v[i] - epsi}`);
                }
                unsettled[i] = false;
                unsettled[s - 1 - i] = false;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (unsettled_p[i]) {
            if (lp.getDual(impu_constr[i]) > prec) {
                if (binrank(Arref, J, A[Math.pow(2, i) - 1], n)) {
                    rank++;
                    if (disp)
                        console.log(
                            `Dual: lambda_impu${i + 1} > 0, rank = ${rank} (${s - Math.pow(2, i)} settled as well)`
                        );
                    if (rank == n) {
                        if (disp) console.log('Rank condition satisfied!');
                        return {
                            s,
                            xS,
                            n,
                            epsi,
                            prec,
                            rank,
                            disp,
                            iter,
                            piv,
                            sr,
                            nlsu,
                        };
                    }
                    rowechform(Arref, J, A[Math.pow(2, i) - 1], n, rank);
                    Asettled[rank - 1] = A[Math.pow(2, i) - 1];
                    settled_values[rank - 1] = v[Math.pow(2, i) - 1];
                    if (disp) console.log(`SETTLED: ${Math.pow(2, i)} at ${v[Math.pow(2, i) - 1]}`);
                }
                unsettled[Math.pow(2, i) - 1] = false;
                unsettled[s - Math.pow(2, i)] = false;
                unsettled_p[i] = false;
            }
        }
    }

    if (disp) {
        console.log(`\n   ---===   ${iter}-TH LP SOLVED   ===---   \n`);
    }

    return {
        s,
        xS,
        n,
        epsi,
        prec,
        rank,
        disp,
        iter,
        piv,
        sr,
        nlsu,
    };
}

function subroutine(
    U: boolean[],
    U2: boolean[],
    Atight: boolean[][],
    Atight2: boolean[][],
    Arref: number[][],
    J: boolean[],
    prec: number,
    n: number,
    t_size: number,
    t2_size: number,
    rank: number,
    disp: boolean,
    Asettled: boolean[][],
    sr: number,
    settled_values: number[],
    unsettled: boolean[],
    T_coord: number[],
    s: number,
    epsi: number,
    v: number[],
    T2_coord: number[]
): {
    prec: number;
    n: number;
    t_size: number;
    t2_size: number;
    rank: number;
    disp: boolean;
    sr: number;
    s: number;
    epsi: number;
} {
    let sumt = 0;
    let t: boolean[] = new Array(t_size).fill(false);
    let sumt2 = 0;
    let t2: boolean[] = new Array(t2_size).fill(false);
    let sr_env = new IloEnv();
    let sr_model = new IloModel(sr_env);
    let lambda = new IloNumVarArray(sr_env, t_size + t2_size + rank, 0, IloInfinity);
    let u: number[] = new Array(t_size + t2_size).fill(0);
    let sr_obj = new IloExpr(sr_env);
    let bal = new IloRangeArray(sr_env, n + 1);
    let bal_eq = new IloExprArray(sr_env, n + 1);

    for (let i = 0; i < rank; i++) {
        lambda[i + t_size + t2_size].setLB(-IloInfinity);
    }

    let pos_eq = new IloExpr(sr_env);
    for (let i = 0; i < n; i++) {
        let eq = new IloExpr(sr_env);
        for (let j = 0; j < t_size; j++) {
            if (Atight[j][i] === true) {
                eq += lambda[j];
            }
            if (i === 0) {
                pos_eq += lambda[j];
                sr_obj += lambda[j];
            }
            if (j < rank && Asettled[j][i] === true) {
                eq += lambda[j + t_size + t2_size];
            }
        }
        for (let j = 0; j < t2_size; j++) {
            if (Atight2[j][i] === true) {
                eq += lambda[j + t_size];
            }
            if (i === 0) {
                sr_obj += lambda[j + t_size];
            }
        }
        if (rank > t_size) {
            for (let j = t_size; j < rank; j++) {
                if (Asettled[j][i] === true) {
                    eq += lambda[j + t_size + t2_size];
                }
            }
        }
        bal_eq[i] = eq;
        let r = new IloRange(eq, 0);
        bal[i] = r;
        sr_model.add(bal[i]);
    }
    bal_eq[n] = pos_eq;
    let r = new IloRange(pos_eq, 1);
    bal[n] = r;
    sr_model.add(bal[n]);
    let OBJ = new IloObjective(sr_env, sr_obj, 'Maximize');
    sr_model.add(OBJ);
    let SR = new IloCplex(sr_model);
    SR.setParam(IloCplex.Param.RootAlgorithm, 1);

    if (!disp) SR.setOut(sr_env.getNullStream());
    else console.log('\n   ---===   SOLVING SUBROUTINE LP   ===---   \n\n');

    let feas = SR.solve();

    if (disp) console.log('subroutine feasibility: ' + feas);

    sr++;

    if (feas) {
        for (let j = 0; j < t_size + t2_size; j++) u[j] = SR.getValue(lambda[j]);
    }
    let i = 0;
    while (feas) {
        ({ i, pos_eq, n, prec, sumt, sumt2, t_size, t2_size, SR, lambda, rank, disp, s, epsi, sr_obj, bal_eq } =
            subr_upd(
                Arref,
                J,
                i,
                pos_eq,
                n,
                prec,
                U,
                U2,
                sumt,
                sumt2,
                t,
                t2,
                Atight,
                Atight2,
                t_size,
                t2_size,
                SR,
                lambda,
                rank,
                disp,
                Asettled,
                settled_values,
                unsettled,
                T_coord,
                s,
                epsi,
                v,
                T2_coord,
                sr_obj,
                bal_eq,
                u
            ));
        if (rank === n)
            return {
                prec,
                n,
                t_size,
                t2_size,
                rank,
                disp,
                sr,
                s,
                epsi,
            };
        else {
            i = 0;
            while (i < t_size) {
                if (t[i] === false) {
                    if (!binrank(Arref, J, Atight[i], n)) {
                        U[i] = false;
                        t[i] = true;
                        pos_eq -= lambda[i];
                        sr_obj -= lambda[i];
                        for (let j = 0; j < n; j++) {
                            if (Atight[i][j]) bal_eq[j] -= lambda[i];
                        }
                        sumt++;
                        unsettled[T_coord[i]] = false;
                        unsettled[s - 1 - T_coord[i]] = false;
                        if (disp) console.log('SETTLED: ' + (T_coord[i] + 1) + ' at ' + (v[T_coord[i]] - epsi));
                        if (disp)
                            console.log(
                                T_coord[i] + 1 + ' and ' + (s - T_coord[i]) + ' got settled without rank increase.'
                            );
                    }
                }
                i++;
            }
            i = 0;
            while (i < t2_size) {
                if (t2[i] === false) {
                    if (!binrank(Arref, J, Atight2[i], n)) {
                        U2[i] = false;
                        t2[i] = true;
                        sr_obj -= lambda[i + t_size];
                        for (let j = 0; j < n; j++) {
                            if (Atight2[i][j]) bal_eq[j] -= lambda[i + t_size];
                        }
                        sumt2++;
                        if (disp) console.log('SETTLED: ' + (T2_coord[i] + 1) + ' at ' + v[T2_coord[i]]);
                        if (unsettled[T2_coord[i]]) {
                            unsettled[T2_coord[i]] = false;
                        }
                        if (unsettled[s - 1 - T2_coord[i]]) {
                            unsettled[s - 1 - T2_coord[i]] = false;
                            if (disp)
                                console.log(
                                    T2_coord[i] +
                                        1 +
                                        ' and ' +
                                        (s - T2_coord[i]) +
                                        ' got settled without rank increase.'
                                );
                        }
                    }
                }
                i++;
            }
        }
        if (sumt === t_size)
            return {
                prec,
                n,
                t_size,
                t2_size,
                rank,
                disp,
                sr,
                s,
                epsi,
            };
        else {
            sr_model.remove(bal[n]);
            bal_eq[n] = pos_eq;
            r = new IloRange(pos_eq, 1);
            bal[n] = r;
            sr_model.add(bal[n]);
            sr_model.remove(OBJ);
            OBJ = new IloObjective(sr_env, sr_obj, 'Minimize');
            sr_model.add(OBJ);
            if (disp) console.log('\n   ---===   SOLVING SUBROUTINE LP AGAIN  ===---   \n\n');
            feas = SR.solve();
            if (disp) console.log('subroutine feasibility: ' + feas);
            sr++;
            if (feas) {
                for (let j = 0; j < t_size + t2_size; j++) u[j] = SR.getValue(lambda[j]);
            }
        }
    }
    return {
        prec,
        n,
        t_size,
        t2_size,
        rank,
        disp,
        sr,
        s,
        epsi,
    };
}

function subr_upd(
    Arref: number[][],
    J: boolean[],
    i: number,
    pos_eq: any,
    n: number,
    prec: number,
    U: boolean[],
    U2: boolean[],
    sumt: number,
    sumt2: number,
    t: boolean[],
    t2: boolean[],
    Atight: boolean[][],
    Atight2: boolean[][],
    t_size: number,
    t2_size: number,
    SR: any,
    lambda: any,
    rank: number,
    disp: boolean,
    Asettled: boolean[][],
    settled_values: number[],
    unsettled: boolean[],
    T_coord: number[],
    s: number,
    epsi: number,
    v: number[],
    T2_coord: number[],
    sr_obj: any,
    bal_eq: any,
    u: number[]
): {
    i: number;
    pos_eq: any;
    n: number;
    prec: number;
    sumt: number;
    sumt2: number;
    t_size: number;
    t2_size: number;
    SR: any;
    lambda: any;
    rank: number;
    disp: boolean;
    s: number;
    epsi: number;
    sr_obj: any;
    bal_eq: any;
} {
    i = 0;

    while (i < t_size && sumt < t_size) {
        if (t[i] === false && u[i] > prec) {
            U[i] = false;
            t[i] = true;
            pos_eq -= lambda[i];
            sr_obj -= lambda[i];
            sumt++;

            if (binrank(Arref, J, Atight[i], n)) {
                if (disp)
                    console.log(
                        `Rank increased to ${rank + 1} with ${T_coord[i] + 1} (and ${s - T_coord[i]}) getting settled.`
                    );

                if (rank === n - 1) {
                    rank++;
                    if (disp) console.log(`Rank condition satisfied!`);

                    return {
                        i,
                        pos_eq,
                        n,
                        prec,
                        sumt,
                        sumt2,
                        t_size,
                        t2_size,
                        SR,
                        lambda,
                        rank,
                        disp,
                        s,
                        epsi,
                        sr_obj,
                        bal_eq,
                    };
                }

                rowechform(Arref, J, Atight[i], n, rank);
                rank++;
                Asettled[rank - 1] = Atight[i];
                settled_values[rank - 1] = v[T_coord[i]] - epsi;
                unsettled[T_coord[i]] = false;
                unsettled[s - 1 - T_coord[i]] = false;
                lambda[i].setLB(-Infinity);

                if (disp) console.log(`SETTLED: ${T_coord[i] + 1} at ${v[T_coord[i]] - epsi}`);
            } else {
                for (let j = 0; j < n; j++) {
                    if (Atight[i][j]) bal_eq[j] -= lambda[i];
                }

                unsettled[T_coord[i]] = false;
                unsettled[s - 1 - T_coord[i]] = false;

                if (disp) {
                    console.log(`SETTLED: ${T_coord[i] + 1} at ${v[T_coord[i]] - epsi}`);
                    console.log(`${T_coord[i] + 1} and ${s - T_coord[i]} got settled without rank increase.`);
                }
            }
        }
        i++;
    }

    i = 0;

    while (i < t2_size && sumt2 < t2_size) {
        if (t2[i] === false && u[i + t_size] > prec) {
            U2[i] = false;
            t2[i] = true;
            sumt2++;
            sr_obj -= lambda[i + t_size];

            if (binrank(Arref, J, Atight2[i], n)) {
                if (disp)
                    console.log(
                        `Rank increased to ${rank + 1} with ${T2_coord[i] + 1} (and ${
                            s - T2_coord[i]
                        }) getting settled.`
                    );

                if (rank === n - 1) {
                    rank++;
                    if (disp) console.log(`Rank condition satisfied!`);

                    return {
                        i,
                        pos_eq,
                        n,
                        prec,
                        sumt,
                        sumt2,
                        t_size,
                        t2_size,
                        SR,
                        lambda,
                        rank,
                        disp,
                        s,
                        epsi,
                        sr_obj,
                        bal_eq,
                    };
                }

                rowechform(Arref, J, Atight2[i], n, rank);
                rank++;
                Asettled[rank - 1] = Atight2[i];
                settled_values[rank - 1] = v[T2_coord[i]];
                unsettled[T2_coord[i]] = false;
                unsettled[s - 1 - T2_coord[i]] = false;
                lambda[i + t_size].setLB(-Infinity);

                if (disp) console.log(`SETTLED: ${T2_coord[i] + 1} at ${v[T2_coord[i]]}`);
            } else {
                for (let j = 0; j < n; j++) {
                    if (Atight2[i][j]) bal_eq[j] -= lambda[i + t_size];
                }

                unsettled[T2_coord[i]] = false;
                unsettled[s - 1 - T2_coord[i]] = false;

                if (disp) {
                    console.log(`SETTLED: ${T2_coord[i] + 1} at ${v[T2_coord[i]]}`);
                    console.log(`${T2_coord[i] + 1} and ${s - T2_coord[i]} got settled without rank increase.`);
                }
            }
        }
        i++;
    }
    return {
        i,
        pos_eq,
        n,
        prec,
        sumt,
        sumt2,
        t_size,
        t2_size,
        SR,
        lambda,
        rank,
        disp,
        s,
        epsi,
        sr_obj,
        bal_eq,
    };
}

const main = async (n: number, disp: boolean, nlsu: boolean) => {

    let s = Math.pow(2, n) - 2;
    let x: number[] = Array(n).fill(0);
    let iter = 0;
    let piv = 0;
    let sr = 0;
    let t = 0;
    let v: number[] = Array(s + 1).fill(0);
    const inputData = (await read('v.txt', 'utf8')).split(' ');
    v = inputData.map(Number);
    console.log('Running PD...');
    PD(disp, n, v, iter, piv, sr, t, x, s, nlsu);

    let res = `${t}\n${iter}\n${piv}\n`;
    for (let i = 0; i < n; i++) {
        res += `${x[i].toFixed(17)}\n`;
    }

    await write('results.txt', res);
    console.log('Press 0 then Enter to quit: ');
};

main(3, true, false).catch(console.error);