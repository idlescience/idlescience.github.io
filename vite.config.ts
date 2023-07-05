import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/nucleolus.tsx'),
      name: 'nucleolus',
      fileName: 'nucleolus',
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'dist')
      },
    },
  },
});