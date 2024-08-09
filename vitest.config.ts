import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    coverage: {
      exclude: [
        "next.config.mjs",
        "postcss.config.mjs",
        "tailwind.config.ts",
        "vitest.config.ts",
        "**/.next/**",
        "**/node_modules/**",
        "next-env.d.ts",
        "app/(pages)/template.tsx",
        "app/(pages)/layout.tsx",
        "app/_components/footer/Footer.tsx",
        "app/_components/navigation/Navigation.tsx",
      ],
    },
  },
});
