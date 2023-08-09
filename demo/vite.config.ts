import { join } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^@uiku\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
