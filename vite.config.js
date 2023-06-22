import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // eslint-disable-next-line no-undef
    outDir: path.join(__dirname, 'public')
  },
  base: ''
})
