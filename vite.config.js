/** @type {import('vite').UserConfig} */

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const isProd = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? '/web-qa-usage/' : '/',
  resolve:{
    alias:{
      '@' : resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
});
