import { defineConfig } from 'vite'
export default defineConfig({
  clearScreen: false,
  define: {
    __DEV__: 'true',
    __BROWSER__: 'true',
  },
  resolve:{
    alias:{
      '@':'src'
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi', '@vueuse/shared', '@vueuse/core'],
  },
})

