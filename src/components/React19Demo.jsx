import { useState } from 'react'

// React 19 feature: Improved ref handling and cleanup
const React19Demo = () => {
  const [showFeatures, setShowFeatures] = useState(false)

  const features = [
    {
      name: "use Hook",
      description: "Consume promises and context directly",
      icon: "🎣",
      status: "✅ Implemented"
    },
    {
      name: "Form Actions",
      description: "Native form handling without event handlers",
      icon: "📝",
      status: "✅ Implemented"
    },
    {
      name: "useOptimistic",
      description: "Optimistic updates for better UX",
      icon: "⚡",
      status: "✅ Implemented"
    },
    {
      name: "Enhanced Suspense",
      description: "Better async component handling",
      icon: "⏳",
      status: "✅ Implemented"
    },
    {
      name: "useTransition",
      description: "Non-blocking state updates",
      icon: "🔄",
      status: "✅ Implemented"
    },
    {
      name: "Error Boundaries",
      description: "Improved error handling and reporting",
      icon: "🛡️",
      status: "✅ Implemented"
    },
    {
      name: "React Compiler",
      description: "Automatic optimization of all components",
      icon: "⚡",
      status: "✅ Active"
    }
  ]

  return (
    <div className="react19-demo bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-xl flex items-center gap-2">
          ⚛️ React 19 Features Showcase
        </h3>
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
        >
          {showFeatures ? 'Hide' : 'Show'} Features
        </button>
      </div>

      <p className="text-gray-300 mb-4">
        This movie app demonstrates the latest React 19 features in action!
        Click the button above to see what's been implemented.
      </p>

      {showFeatures && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{feature.icon}</span>
                <h4 className="text-white font-semibold">{feature.name}</h4>
              </div>
              <p className="text-gray-300 text-sm mb-2">{feature.description}</p>
              <span className="text-green-400 text-xs font-medium">
                {feature.status}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
        <h4 className="text-yellow-300 font-semibold mb-2">🎯 Try These Features:</h4>
        <ul className="text-yellow-100 text-sm space-y-1">
          <li>• Scroll up to see the trending movies loaded with the <code className="bg-gray-800 px-1 rounded">use</code> hook</li>
          <li>• Fill out the movie recommendation form to see form actions in action</li>
          <li>• Click the like button to experience optimistic updates</li>
          <li>• Notice the smooth loading states powered by useTransition</li>
          <li>• Interact with the React Compiler demo to see automatic optimizations</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
        <h4 className="text-green-300 font-semibold mb-2">⚡ React Compiler Active!</h4>
        <p className="text-green-100 text-sm">
          All components in this app are automatically optimized by the React Compiler.
          No manual memoization needed - the compiler handles everything automatically!
        </p>
      </div>
    </div>
  )
}

export default React19Demo
