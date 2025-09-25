import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // when you call /api/... in frontend, it will be proxied to backend
      '/api': {
        target: 'http://10.182.1.24:4000',
        changeOrigin: true,
        secure: false,
      },
    },
    host: "::",
    port: 5003,
    allowedHosts: ['aiagentsportal.inflectotechnologies.com'],
  },
})
