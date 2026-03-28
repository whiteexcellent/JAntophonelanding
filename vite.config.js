import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three") || id.includes("cobe")) {
              return "three-vendor";
            }
            if (id.includes("framer-motion") || id.includes("motion")) {
              return "motion-vendor";
            }
            if (id.includes("lucide-react")) {
              return "lucide-vendor";
            }
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
