import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), basicSsl()],
  server: { https: true, host: true, port: 8080 },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: "src/main.js",
      },
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "build-[hash].js",
        assetFileNames: (assetInfo) => {
          const arr = assetInfo.name.trim().split(".");
          let extType = "ext";
          if (arr.length > 1) {
            extType = arr[arr.length - 1];
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (extType.length > 5) {
            extType = extType.slice(0, 4);
          }
          return extType === "ext"
            ? `${extType}-[hash].ext`
            : `${extType}-[hash][extname]`;
        },
      },
    },
  },
});
