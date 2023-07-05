import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'idlescience',
      fileName: 'idlescience',
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'dist')
      },
    },
  },
});
