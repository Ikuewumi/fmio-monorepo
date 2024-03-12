import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import path from "path"


export default defineConfig({
	plugins: [
		AutoImport({
			dts: true,
			dirs: ["./src/composables"]
		}),
	],
	resolve: {
		alias: {
			"@cmp": `${path.resolve(__dirname, './src/components')}`,
			"@scss": `${path.resolve(__dirname, './src/scss')}`,
		}
	}
})
