// The Lovable helper owns the existing TanStack, React, Tailwind, aliases,
// diagnostics, devtools, and sandbox plugins. Resolve that config first, then
// prepend Cloudflare's official Vite environment plugin for Workers builds.
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";
import { defineConfig } from "vite";

const lovableConfig = defineLovableConfig({
  // Cloudflare's Vite plugin replaces the previous Nitro deployment adapter.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
});

export default defineConfig(async (env) => {
  const config = await lovableConfig(env);

  return {
    ...config,
    plugins: [
      cloudflare({ viteEnvironment: { name: "ssr" } }),
      ...(config.plugins ?? []),
    ],
  };
});
