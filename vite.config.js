import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/buildEntry.js"),
      name: "ArcGE",
      fileName: (format) => `arcge.${format}.js`,
    },
  },
});
