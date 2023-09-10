import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
} from 'unocss'
import {presetDaisy} from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy(),
    presetIcons(),
    presetTypography({
      selectorName: 'markdown', // now use like `markdown markdown-gray`, `not-markdown`
      // cssExtend is an object with CSS selector as key and
      // CSS declaration block as value like writing normal CSS.
      cssExtend: {
        'code': {
          color: '#8b5cf6',
        },
        'a:hover': {
          color: '#f43f5e',
        },
        'a:visited': {
          color: '#14b8a6',
        },
      },
    }),
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
