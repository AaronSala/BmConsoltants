import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/BmConsoltants/" : "/",
  server: {
    host: "::",
    port: 5173, // or any port you prefer
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
