import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React plugin with Babel configuration for React Compiler
    react({
      babel: {
        plugins: [
          // React 19 Compiler Plugin
          ['babel-plugin-react-compiler', {
            runtimeModule: 'react/compiler-runtime',
            compilationMode: 'all',
            enableOptimizations: true,
            enableMemoization: true,
            enableAutoDeps: true,
            // Development optimizations
            ...(process.env.NODE_ENV === 'development' && {
              enableDebugMode: true,
              enableWarnings: true
            })
          }]
        ]
      }
    }),
    tailwindcss()
  ],

  // Optimize dependencies for React Compiler
  optimizeDeps: {
    include: ['react/compiler-runtime']
  },

  // Build optimizations
  build: {
    // Enable source maps for better debugging with React Compiler
    sourcemap: true,

    // Optimize chunks for React Compiler output
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'react-compiler': ['react/compiler-runtime']
        }
      }
    }
  }
})
