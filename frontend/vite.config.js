import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/": {
        // target: 'https://mineriabackend.onrender.com',
        target: 'http://localhost',
        changeOrigin: true,
        ws: true
      },
      "/api/questions": {
        // target: 'https://mineriabackend.onrender.com',
        target: 'http://localhost',
        changeOrigin: true,
      }
    }
  }
})
