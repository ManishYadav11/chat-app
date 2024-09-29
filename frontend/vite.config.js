import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Use this target for API requests
        changeOrigin: true, // Optionally set to true to handle CORS issues
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: removes "/api" prefix
      },
    },
  },
});
