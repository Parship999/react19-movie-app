import { useState, useOptimistic } from 'react'

// React 19 feature: useOptimistic hook for optimistic updates
const OptimisticLikes = ({ movieTitle = "Sample Movie" }) => {
  const [likes, setLikes] = useState(42)
  const [isLiking, setIsLiking] = useState(false)
  
  // React 19 feature: useOptimistic for immediate UI updates
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes, optimisticValue) => currentLikes + optimisticValue
  )

  const handleLike = async () => {
    if (isLiking) return
    
    setIsLiking(true)
    
    // Optimistically update the UI immediately
    addOptimisticLike(1)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Update the actual state after API success
      setLikes(prev => prev + 1)
    } catch (error) {
      console.error('Failed to like movie:', error)
      // The optimistic update will be reverted automatically on error
    } finally {
      setIsLiking(false)
    }
  }

  return (
    <div className="optimistic-likes bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-lg p-4 mt-4">
      <h4 className="text-white font-semibold mb-2">
        💖 React 19 Optimistic Updates Demo
      </h4>
      <p className="text-sm text-gray-300 mb-3">
        Uses <code className="bg-gray-800 px-1 rounded">useOptimistic</code> for instant UI feedback!
      </p>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-200">"{movieTitle}"</p>
          <p className="text-lg font-bold text-pink-400">
            ❤️ {optimisticLikes} likes
          </p>
        </div>
        
        <button
          onClick={handleLike}
          disabled={isLiking}
          className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLiking ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Liking...
            </>
          ) : (
            <>
              ❤️ Like
            </>
          )}
        </button>
      </div>
      
      {optimisticLikes !== likes && (
        <p className="text-xs text-yellow-400 mt-2">
          ⚡ Optimistic update in progress...
        </p>
      )}
    </div>
  )
}

export default OptimisticLikes
