
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//  Caminho  para funcionar no localhost e no deploy (Vercel / GitHub Pages)
export default defineConfig({
  plugins: [react()],
  base: "./",
});
