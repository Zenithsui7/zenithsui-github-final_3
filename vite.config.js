import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zenithsui-github-final_3/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
