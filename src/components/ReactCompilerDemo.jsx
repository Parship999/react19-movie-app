import { useState, useMemo, useCallback } from 'react'

// React Compiler Demo Component
// The React Compiler will automatically optimize this component:
// - Automatic memoization of expensive calculations
// - Automatic dependency tracking
// - Elimination of unnecessary re-renders
// - Optimization of event handlers

const ReactCompilerDemo = () => {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(2)
  const [items, setItems] = useState(['Movie 1', 'Movie 2', 'Movie 3'])
  const [filter, setFilter] = useState('')

  // React Compiler will automatically optimize this expensive calculation
  // No need for useMemo - the compiler handles it!
  const expensiveCalculation = () => {
    console.log('🔄 Expensive calculation running...')
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += i * count * multiplier
    }
    return result
  }

  // React Compiler will automatically memoize this filtered list
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(filter.toLowerCase())
  )

  // React Compiler will automatically optimize these event handlers
  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1)
  }

  const handleMultiplierChange = (e) => {
    setMultiplier(parseInt(e.target.value) || 1)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleAddItem = () => {
    const newItem = `Movie ${items.length + 1}`
    setItems(prev => [...prev, newItem])
  }

  const handleRemoveItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index))
  }

  // React Compiler optimizes this entire component automatically
  return (
    <div className="react-compiler-demo bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6 mt-8">
      <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
        ⚡ React Compiler Demo
      </h3>
      
      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
        <h4 className="text-green-300 font-semibold mb-2">🚀 Automatic Optimizations:</h4>
        <ul className="text-green-100 text-sm space-y-1">
          <li>• ✅ Automatic memoization (no useMemo needed)</li>
          <li>• ✅ Automatic dependency tracking</li>
          <li>• ✅ Event handler optimization</li>
          <li>• ✅ Elimination of unnecessary re-renders</li>
          <li>• ✅ Smart component compilation</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Counter Section */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Counter & Calculations</h4>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecrement}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors"
            >
              -
            </button>
            <span className="text-white font-mono text-lg">{count}</span>
            <button
              onClick={handleIncrement}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors"
            >
              +
            </button>
          </div>

          <div>
            <label className="block text-gray-200 mb-2">
              Multiplier: {multiplier}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={multiplier}
              onChange={handleMultiplierChange}
              className="w-full"
            />
          </div>

          <div className="bg-gray-800/50 p-3 rounded">
            <p className="text-gray-300 text-sm mb-1">Expensive Calculation Result:</p>
            <p className="text-yellow-300 font-mono text-lg">
              {expensiveCalculation().toLocaleString()}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              (React Compiler automatically optimizes this!)
            </p>
          </div>
        </div>

        {/* List Management Section */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Dynamic List Management</h4>
          
          <div>
            <input
              type="text"
              placeholder="Filter movies..."
              value={filter}
              onChange={handleFilterChange}
              className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-teal-500 focus:outline-none"
            />
          </div>

          <button
            onClick={handleAddItem}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded transition-colors"
          >
            Add Movie
          </button>

          <div className="space-y-2 max-h-40 overflow-y-auto">
            {filteredItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center justify-between bg-gray-800/50 px-3 py-2 rounded"
              >
                <span className="text-white">{item}</span>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400">
            Showing {filteredItems.length} of {items.length} items
            (Filtering automatically optimized by React Compiler)
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
        <h4 className="text-blue-300 font-semibold mb-2">💡 React Compiler Benefits:</h4>
        <p className="text-blue-100 text-sm">
          This component demonstrates how React Compiler automatically optimizes your code without 
          manual memoization. Try interacting with the controls and check the console - you'll see 
          the expensive calculation only runs when necessary, thanks to automatic optimization!
        </p>
      </div>
    </div>
  )
}

export default ReactCompilerDemo
