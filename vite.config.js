import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to './' so assets load correctly from any GitHub Pages subdirectory.
// If your repo is at https://<user>.github.io/<repo>/ this works automatically.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
