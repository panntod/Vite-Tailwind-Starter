import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: { port: 3000 },
  preview: { port: 3000 },
  plugins: [react()],
});
