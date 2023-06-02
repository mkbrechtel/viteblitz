import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
// import Inspector from 'vite-plugin-vue-inspector'
import { ViteBlitz } from "./src";
import Markdown from 'vite-plugin-md'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown(),
    Inspect(),
    // Inspector(),
    ViteBlitz(),
  ],
})
