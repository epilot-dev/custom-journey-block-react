import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'custom',
  preview: {
      allowedHosts: true
  },
  define: {
    'process.env': {},
    process: {}
  },
  build: {
    lib: {
    name: 'MyLibrary',
      entry: 'src/main.tsx', // Your TypeScript entry file
      formats: ['umd'],
      fileName: () => 'bundle.js', // Forces a single output file
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@epilot/concorde-elements'],
      
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@epilot/concorde-elements': 'Concorde'
        },
        inlineDynamicImports: true
      },
    },
    cssCodeSplit: false, // Ensures a single CSS file output
    minify: true,
    sourcemap: false,
  },
})
