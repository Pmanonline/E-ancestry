// import react from "@vitejs/plugin-react";
// import path from "path";

// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       onwarn(warning, warn) {
//         if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
//           return;
//         }
//         warn(warning);
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
