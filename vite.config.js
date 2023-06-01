import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
// import Inspector from 'vite-plugin-vue-inspector'
import { ViteBlitz } from "./src";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Inspect(),
    // Inspector(),
    ViteBlitz(),
  ],
})
