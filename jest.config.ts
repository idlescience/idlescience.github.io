export default {
    transform: {
        '^.+\\.tsx?$': '@swc/jest'
    },
    roots: [
        './tests',
    ],
}