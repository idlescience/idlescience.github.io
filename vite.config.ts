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
      entry: [
        resolve(__dirname, 'src/nucleolus-in-f1.tsx'),
      ],
      name: 'idlescience',
      formats: ['es'],
      fileName : '[name]'
    },
    rollupOptions: {
      output: {
        dir: resolve(__dirname, 'public/dist'),
      },
    },
  },
});
