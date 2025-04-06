import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    !process.env.VITEST && [reactRouter()], 
    tsconfigPaths()
  ],
  server: {
    host: '0.0.0.0',
    port: 5173, // 任意のポート
  },
});