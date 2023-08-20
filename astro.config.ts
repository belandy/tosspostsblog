import { defineConfig } from 'astro/config'
import preact from "@astrojs/preact"
import unocss from 'unocss/astro'


// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    unocss({injectReset: true}),
  ],
  experimental: {
    assets: true,
  },
});
