import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import monacoEditorPlugin from 'vite-plugin-monaco-editor'

export default defineConfig({
  plugins: [vue(), monacoEditorPlugin({})],
  root: './',
  server: {
    host: true,
    port: 3333,
    open: '/preview/index.html'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      'chart-components': resolve(__dirname, './')
    }
  }
})
