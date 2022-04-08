import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const { resolve } = require("path")
import viteCompression from "vite-plugin-compression"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import OptimizationPersist from "vite-plugin-optimize-persist"
import PkgConfig from "vite-plugin-package-config"

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/global.scss" as *;`
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        })
      ]
    }),
    PkgConfig(),
    OptimizationPersist(),
    viteCompression()
  ]
})
