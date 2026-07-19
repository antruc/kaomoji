import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CSP only on build, dev needs inline scripts and ws for HMR
const csp = {
  name: 'csp',
  apply: 'build',
  transformIndexHtml() {
    return [
      {
        tag: 'meta',
        attrs: {
          'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self'; style-src 'self' 'unsafe-inline'"
        },
        injectTo: 'head'
      }
    ]
  }
}

export default defineConfig({
  base: '/kaomoji/',
  plugins: [react(), csp],
  // globals: true so testing-library auto-cleans the DOM between tests
  test: { environment: 'jsdom', globals: true }
})
