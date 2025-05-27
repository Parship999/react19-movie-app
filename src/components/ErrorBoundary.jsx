import { Component } from 'react'

// React 19 feature: Enhanced Error Boundary with better error reporting
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // React 19 provides better error information and stack traces
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    
    // You can also log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary bg-red-900/20 border border-red-500/30 rounded-lg p-6 m-4">
          <h2 className="text-red-400 text-xl font-bold mb-4">
            🚨 Something went wrong (React 19 Error Boundary)
          </h2>
          <p className="text-gray-300 mb-4">
            This error was caught by React 19's enhanced error boundary system.
          </p>
          
          {this.state.error && (
            <details className="mb-4">
              <summary className="text-red-300 cursor-pointer hover:text-red-200">
                Error Details (Click to expand)
              </summary>
              <pre className="text-xs text-gray-400 mt-2 p-2 bg-gray-800 rounded overflow-auto">
                {this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          
          <button 
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
