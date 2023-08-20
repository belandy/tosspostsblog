import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from 'unocss'
import {presetDaisy} from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Noto Sans Japanese',
        // custom ones
        raleway: [{
          name: 'Raleway',
          weights: ['800'],
        }],
        blinker: 'Blinker:300',
        main: 'Noto Sans JP',
      },
    })
  ],
  shortcuts: [
    { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
  ],
  transformers: [
    transformerDirectives(),
  ],
  rules: [
    ['m-1', { margin: '1px' }]
  ],

})
