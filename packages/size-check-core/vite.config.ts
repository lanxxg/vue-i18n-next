import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    __DEV__: false,
    // this is only used during tests
    __TEST__: false,
    // If the build is expected to run directly in the browser (global / esm builds)
    __BROWSER__: true,
    // is targeting bundlers?
    __BUNDLER__: false,
    __GLOBAL__: false,
    __RUNTIME__: true,
    // is targeting Node (SSR)?
    __NODE_JS__: false,
    'process.env.NODE_ENV': JSON.stringify('production'),
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  plugins: []
})