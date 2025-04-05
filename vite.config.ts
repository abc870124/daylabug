import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default defineConfig({
  base: "/your-repo-name/", // Điều chỉnh cho GitHub Pages
  server: {
    host: "0.0.0.0",
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "last 2 versions",
            "> 1%",
            "not dead",
          ],
        }),
        cssnano({ preset: "default" }),
      ],
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    sourcemap: true,
  },
});
