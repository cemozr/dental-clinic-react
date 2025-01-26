/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Jest benzeri global değişkenler (describe, test, expect vs.)
    environment: "jsdom", // React testleri için jsdom ortamı
    setupFiles: "./src/test/setup.ts", // Test öncesi ayarlar
  },
});
