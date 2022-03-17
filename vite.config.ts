import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetWind } from 'unocss'

const path = require('path')

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetWind()
      ],
      rules: [
        // your custom rules
      ],
    })
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  server: {
    port: 7300,
    host: 'localhost',
    // proxy: {
    //   '/api': "http://localhost:7100/api" 
    // }
  },
  build: {
    sourcemap: true
    // rollupOptions:{}  // 自定义底层的 Rollup 打包配置   https://rollupjs.org/guide/en/#big-list-of-options
  }
})
