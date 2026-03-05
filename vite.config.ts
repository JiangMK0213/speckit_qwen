import { defineConfig, loadEnv, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const plugins = [
    vue(),
    // 在 HTML 模板中注入变量
    ViteEjsPlugin({
      APP_TITLE: env.VITE_APP_TITLE,
      SCENE_URL: env.VITE_SCENE_URL
    }),
    mode === 'production' && cleanDevFiles()
  ]
  // 仅在分析模式下添加可视化打包分析插件
  if (env.ANALYZE === 'true') {
    plugins.push(
      visualizer({
        filename: 'stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return {
    plugins,
    server: {
      host: true,
      port: 3000,
      open: true
    },
    extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx'],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/variables" as *;'
        }
      }
    }
  }
})

// 创建清理插件，构建时移除不需要的文件
function cleanDevFiles(): Plugin {
  return {
    name: 'clean-dev-files',
    closeBundle: {
      sequential: true,
      async handler() {
        const devEnv = loadEnv('development', process.cwd(), '')
        const prodEnv = loadEnv('production', process.cwd(), '')
        if (devEnv.VITE_SCENE_URL !== prodEnv.VITE_SCENE_URL) {
          // 移除开发环境使用的编辑器项目资源
          const devScenePath = devEnv.VITE_SCENE_URL.startsWith('/')
            ? devEnv.VITE_SCENE_URL.slice(1)
            : devEnv.VITE_SCENE_URL
          const targetPath = path.resolve(__dirname, 'dist', devScenePath)

          if (fs.existsSync(targetPath)) {
            await fs.promises.rm(targetPath, { recursive: true, force: true })
          }
        }
      }
    }
  }
}
