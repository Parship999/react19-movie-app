// React Compiler Configuration
// This file configures the React 19 Compiler for optimal performance

const config = {
  // Compilation mode - 'all' compiles all components
  compilationMode: 'all',
  
  // Enable all optimizations
  enableOptimizations: true,
  
  // Enable automatic memoization
  enableMemoization: true,
  
  // Enable automatic dependency tracking
  enableAutoDeps: true,
  
  // Runtime module for React Compiler
  runtimeModule: 'react/compiler-runtime',
  
  // Sources to compile (can be specific files or patterns)
  sources: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  
  // Exclude certain files from compilation
  exclude: [
    'node_modules/**',
    'dist/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}'
  ],
  
  // Advanced optimization settings
  optimizations: {
    // Enable dead code elimination
    deadCodeElimination: true,
    
    // Enable constant folding
    constantFolding: true,
    
    // Enable inline functions
    inlineFunctions: true,
    
    // Enable loop optimizations
    loopOptimizations: true,
    
    // Enable component splitting for better code splitting
    componentSplitting: true
  },
  
  // Memoization settings
  memoization: {
    // Automatically memoize expensive computations
    autoMemoizeComputations: true,
    
    // Automatically memoize event handlers
    autoMemoizeHandlers: true,
    
    // Automatically memoize component props
    autoMemoizeProps: true,
    
    // Threshold for automatic memoization (complexity score)
    complexityThreshold: 10
  },
  
  // Development settings
  development: {
    // Enable debug mode in development
    enableDebugMode: process.env.NODE_ENV === 'development',
    
    // Show compilation warnings
    enableWarnings: true,
    
    // Enable performance profiling
    enableProfiling: true,
    
    // Log compilation statistics
    logStats: true
  },
  
  // Production settings
  production: {
    // Enable aggressive optimizations in production
    aggressiveOptimizations: process.env.NODE_ENV === 'production',
    
    // Enable tree shaking
    treeShaking: true,
    
    // Enable minification
    minification: true,
    
    // Remove debug information
    removeDebugInfo: true
  },
  
  // Experimental features (use with caution)
  experimental: {
    // Enable experimental optimizations
    enableExperimentalOptimizations: false,
    
    // Enable concurrent features optimization
    enableConcurrentOptimizations: true,
    
    // Enable server components optimization
    enableServerComponentsOptimization: false
  }
}

module.exports = config
