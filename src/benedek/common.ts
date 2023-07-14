export const rowechform = (Arref: number[][], J: boolean[], B: boolean[], n: number, rank: number) => {
    let prec = Math.pow(10, -10);
    let rref: number[][] = Array(rank + 1).fill(Array(n).fill(0));
    rref[0] = [...Arref[0]]; // first row done

    for (let i = 1; i < rank + 1; i++) {
        for (let j = 0; j < n; j++) {
            if (i < rank) {
                if (Arref[i][j] > prec || Arref[i][j] < -prec) {
                    rref[i][j] = Arref[i][j];
                }
            } else {
                if (B[j]) {
                    rref[i][j] = 1;
                }
            }
        }
    }

    for (let i = 1; i < rank + 1; i++) {
        if (rref[i][0] > prec || rref[i][0] < -prec) {
            if (rref[i][0] < 1 + prec && rref[i][0] > 1 - prec) {
                vec_subtract(rref[i], rref[0], rref[i]);
            } else {
                rowechform_piv2(rref, i, n);
            }
        }
    } //first column done

    let l = 1;
    let j = 1;
    while (l < rank + 1 && j < n) {
        rowechform_loop(rref, J, l, j, rank, prec, n);
    }

    if (rank + 1 < n) {
        for (let l = 1; l < rank + 1; l++) {
            Arref[l] = [...rref[l]];
        }
    } else {
        for (let l = 1; l < n; l++) {
            Arref[l] = [...rref[l]];
        }
    }
};

export const rowechform_loop = (
    rref: number[][],
    J: boolean[],
    i: number,
    j: number,
    rank: number,
    prec: number,
    n: number
) => {
    let nonz: number[] = [];
    let ones: number[] = [];

    for (let k = i; k < rank + 1; k++) {
        if (rref[k][j] > prec || rref[k][j] < -prec) {
            if (rref[k][j] < 1 + prec && rref[k][j] > 1 - prec) {
                ones.push(k);
            } else {
                nonz.push(k);
            }
        }
    }

    if (ones.length == 0 && nonz.length == 0) {
        j++; // all zero column, we can move on
    } else {
        if (ones.length == 0) {
            // there are no 1s, but have non-zeros
            if (nonz[0] != i) {
                // if the first non-zero is not in the i-th row => Arref[i][j]=0
                swap_ith_and_firstnz(rref, nonz, i); // swap i-th and first non-zero row
            }
            sc_vec_prod(rref[i], 1 / rref[i][j], rref[i]);
        } else {
            // there are 1s => if first 1 is in the 1-th row, there's nothing to do
            if (ones[0] != i) {
                // if it's not in the i-th row, we swap the i-th and the first 1
                swap_ith_and_firstone(rref, ones, nonz, i);
            }
        }
        // eliminate all the pos with i-th row, then i++, j++ and move on
        if (ones.length > 0) {
            if (ones[0] == i) {
                for (let k = 1; k < ones.length; k++) {
                    vec_subtract(rref[ones[k]], rref[ones[k]], rref[i]);
                }
            } else {
                for (let k = 0; k < ones.length; k++) {
                    vec_subtract(rref[ones[k]], rref[ones[k]], rref[i]);
                }
            }
        }

        if (nonz.length > 0) {
            if (nonz[0] == i) {
                for (let k = 1; k < nonz.length; k++) {
                    rowechform_piv(rref, nonz, i, j, k, n);
                }
            } else {
                for (let k = 0; k < nonz.length; k++) {
                    rowechform_piv(rref, nonz, i, j, k, n);
                }
            }
        }

        i++;
        J[j] = false;
        j++;
    }
};

export const rowechform_piv = (rref: number[][], nonz: number[], i: number, j: number, k: number, n: number) => {
    let aux: number[] = Array(n).fill(0);
    sc_vec_prod(aux, rref[nonz[k]][j], rref[i]);
    vec_subtract(rref[nonz[k]], rref[nonz[k]], aux);
};

export const rowechform_piv2 = (rref: number[][], i: number, n: number) => {
    let aux: number[] = Array(n).fill(0);
    sc_vec_prod(aux, rref[i][0], rref[0]);
    vec_subtract(rref[i], aux, rref[i]);
};

export const swap_ith_and_firstnz = (rref: number[][], nonz: number[], i: number) => {
    let aux = [...rref[nonz[0]]]; // swap i-th and first non-zero row
    rref[nonz[0]] = [...rref[i]];
    rref[i] = [...aux];
    nonz[0] = i;
};

export const swap_ith_and_firstone = (rref: number[][], ones: number[], nonz: number[], i: number) => {
    let aux = [...rref[ones[0]]];
    rref[ones[0]] = [...rref[i]];
    rref[i] = [...aux];
    if (nonz.length > 0) {
        if (nonz[0] == i) {
            nonz[0] = ones[0];
        }
    }
    ones[0] = i;
};

export const binrank = (Arref: number[][], J: boolean[], b: boolean[], n: number): boolean => {
    let prec = Math.pow(10, -10);
    let B: number[] = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (b[i] == true) B[i] = 1;
    }
    let m = 0;
    let size = true;
    while (size) {
        if (nonz_vec(Arref[m], prec)) m++;
        else size = false;
    }
    if (m >= n) return false;
    else {
        let pivot_col: boolean[] = Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            if (J[i] == false) pivot_col[i] = true;
        }
        let j = 0;
        let piv: boolean[] = Array(n).fill(false);
        let aux: number[] = Array(n).fill(0);
        let k = 0;
        let I = 0;
        let s = 0;
        let ind = 0;
        let count = 0;
        while (j < n) {
            for (let i = 0; i < n; i++) {
                if (B[i] > prec || B[i] < -prec) piv[i] = true;
            }
            s = sum_vecb(piv);
            if (s == 0) return false;
            else {
                while (k == 0) {
                    if (piv[I] == true) k = I + 1;
                    I++;
                }
                k--;
                I = 0;
                if (J[k] == true) return true;
                else {
                    while (count < k + 1) {
                        if (pivot_col[count]) ind++;
                        count++;
                    }
                    ind--;
                    count = 0;
                    sc_vec_prod(aux, B[k] / Arref[ind][k], Arref[ind]);
                    vec_subtract(B, B, aux);
                    j++;
                }
            }
            for (let l = 0; l < n; l++) piv[l] = false;
            k = 0;
            ind = 0;
        }
        return false;
    }
};

export const A_mx = (A: boolean[][], n: number, s: number): void => {
    // creates boolean matrix A containing all the possible n-length boolean vectors (except for full zeros)
    for (let k = 0; k != s + 1; k++) {
        let i = 2;
        for (let c = 0; c < n - 2; c++) i += i;
        let j = k + 1;
        let l = n - 1;
        while (j > 0) {
            if (j >= i) {
                A[k][l] = true;
                j -= i;
            }
            i /= 2;
            l--;
        }
    }
};

export const sum_vecb = (x: boolean[]): number => {
    let s = 0;
    for (let i = 0; i < x.length; i++) s += x[i] ? 1 : 0;

    return s;
};

export const nonz_vec = (x: number[], prec: number): boolean => {
    for (let i = 0; i < x.length; i++) {
        if (x[i] > prec || x[i] < -prec) return true;
    }
    return false;
};

export const vec_subtract = (z: number[], x: number[], y: number[]): void => {
    for (let i = 0; i < x.length; i++) z[i] = x[i] - y[i];
};

export const sc_vec_prod = (y: number[], a: number, x: number[]): void => {
    for (let i = 0; i < x.length; i++) y[i] = a * x[i];
};
