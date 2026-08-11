import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 部署：使用相对路径，避免子目录下资源 404
  base: './',
  plugins: [react()],
})
