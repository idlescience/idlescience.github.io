import { globSync } from 'glob';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
    plugins: [react(), wasm(), topLevelAwait()],
    define: {
        'process.env': process.env,
    },
    build: {
        lib: {
            entry: globSync('src/page/*.tsx'),
            name: 'idlescience',
            formats: ['es'],
            fileName: '[name]',
        },
        rollupOptions: {
            input: {
                app: './dev.html',
            },
            output: {
                dir: 'public/dist',
            },
        },
    },
    server: {
        open: '/dev.html',
    },
});
