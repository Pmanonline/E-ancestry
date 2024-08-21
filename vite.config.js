import { defineConfig } from "vite";
import path from "path";

console.log("Vite alias configuration:", path.resolve(__dirname, "./src"));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
