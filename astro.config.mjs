import { defineConfig } from 'astro/config'
import preact from "@astrojs/preact"
import unocss from 'unocss/astro'
import {presetUno} from 'unocss'
import {presetDaisy} from 'unocss-preset-daisy'

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    unocss({
      presets: [presetUno(), presetDaisy()],
      injectReset: true,
    }),
  ],
  experimental: {
    assets: true,
  },
});
