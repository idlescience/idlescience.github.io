export default {
    transform: {
        '^.+\\.tsx?$': '@swc/jest'
    },
    roots: [
        './src/__tests__',
    ],
}