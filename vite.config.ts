import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [ 
      'jiqfmkv7ub.ap-northeast-1.awsapprunner.com'
    ]
  }
})
