import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    AutoImport({
      dts: true,
      imports: [
        "solid-js"
      ],
      dirs: ["./src/composables"]
    }),
    solid()
  ],
  
  resolve: {
    alias: {
      "@cmp": `${path.resolve(__dirname, './src/components')}`,
      "@scss": `${path.resolve(__dirname, './src/scss')}`,

    }
  }
})
