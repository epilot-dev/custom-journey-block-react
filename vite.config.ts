import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'custom',
  preview: {
      allowedHosts: true
  },
  build: {
    lib: {
    name: 'MyLibrary',
      entry: 'src/main.tsx', // Your TypeScript entry file
      formats: ['umd'],
      fileName: () => 'bundle.js', // Forces a single output file
    },
    rollupOptions: {
      external: [], // Don't mark any dependencies as external
      output: {
        inlineDynamicImports: true, // Ensures a single file output
      },
    },
    cssCodeSplit: false, // Ensures a single CSS file output
    minify: true,
    sourcemap: false,
  },
})
