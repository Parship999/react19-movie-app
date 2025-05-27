module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: [
    // React 19 Compiler - Automatic optimization of React components
    ['babel-plugin-react-compiler', {
      // Configuration options for React Compiler
      runtimeModule: 'react/compiler-runtime',
      
      // Enable compilation for all components
      compilationMode: 'all',
      
      // Enable optimizations
      enableOptimizations: true,
      
      // Enable memoization optimizations
      enableMemoization: true,
      
      // Enable automatic dependency tracking
      enableAutoDeps: true,
      
      // Development mode settings
      ...(process.env.NODE_ENV === 'development' && {
        // Enable debugging in development
        enableDebugMode: true,
        
        // Show compilation warnings
        enableWarnings: true
      })
    }]
  ]
};
