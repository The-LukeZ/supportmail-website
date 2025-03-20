import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { paraglideVitePlugin } from '@inlang/paraglide-js';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      strategy: ["localStorage", "cookie", "preferredLanguage"],
    }),
  ],

  server: {
    port: 6060,
    cors: {
      credentials: true,
    },
  },

  appType: "custom",
  logLevel: "info",
});
