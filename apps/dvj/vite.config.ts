import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import {svelte} from "@sveltejs/vite-plugin-svelte"
import sveltePreprocess from "svelte-preprocess"

export default defineConfig({
  plugins: [
    AutoImport({
      dts: true,
      dirs: ["./src/composables"],
      imports: ["svelte"]
    }),



    svelte({
      preprocess: sveltePreprocess()
    })
  ],


})
