import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['t1', 'text-3xl mt2 mb2 block'],
    ['t2', 'text-2xl mt2 mb2 block'],
    ['t3', 'text-xl mt2 mb2 block'],
    ['frow', 'flex flex-row'],
    ['fcol', 'flex flex-col'],
    ['fcenter', 'justify-center items-center'],
    ['text-btn', 'bg-red inline-block text-xl text-center w6.3 h6.3 b-rounded lh-6.3 cursor-pointer select-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
