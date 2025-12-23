import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        tags: [
          {
            tag: 'link',
            attrs: {
              rel: 'preload',
              as: 'style',
              href: '/src/index.css',
              onload: "this.onload=null;this.rel='stylesheet'",
            },
            injectTo: 'head',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['primereact/dialog', 'primereact/button'],
  },
})
