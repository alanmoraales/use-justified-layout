import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "use-justified-layout",
      fileName: (format) => `use-justified-layout.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "justified-layout"],
    },
  },
});
