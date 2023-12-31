import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/School-Journal-Project",
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
});
