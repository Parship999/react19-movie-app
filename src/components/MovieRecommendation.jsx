import { useState, useTransition } from 'react'

// React 19 feature: Form Actions and useTransition for better UX
const MovieRecommendation = () => {
  const [recommendation, setRecommendation] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isPending, startTransition] = useTransition()

  // React 19 feature: Form action function
  const handleRecommendation = async (formData) => {
    const movieTitle = formData.get('movieTitle')
    const userRating = formData.get('rating')
    
    // Simulate API call with transition for better UX
    startTransition(async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setRecommendation(`Thanks for recommending "${movieTitle}" with ${userRating} stars! 🌟`)
      setIsSubmitted(true)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setRecommendation('')
      }, 3000)
    })
  }

  return (
    <section className="movie-recommendation bg-dark-100 p-6 rounded-2xl shadow-inner shadow-light-100/10 mt-8">
      <h3 className="text-white font-bold text-lg mb-4">
        📝 Recommend a Movie (React 19 Form Actions)
      </h3>
      <p className="text-sm text-gray-100 mb-4">
        This form uses React 19's new form actions and <code className="bg-gray-800 px-1 rounded">useTransition</code> for smooth UX!
      </p>
      
      {isSubmitted ? (
        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-green-300">
          {recommendation}
        </div>
      ) : (
        <form action={handleRecommendation} className="space-y-4">
          <div>
            <label htmlFor="movieTitle" className="block text-gray-200 mb-2">
              Movie Title:
            </label>
            <input
              type="text"
              id="movieTitle"
              name="movieTitle"
              required
              disabled={isPending}
              className="w-full bg-light-100/5 px-4 py-2 rounded-lg text-white placeholder-gray-400 border border-gray-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
              placeholder="Enter a movie you'd recommend..."
            />
          </div>
          
          <div>
            <label htmlFor="rating" className="block text-gray-200 mb-2">
              Your Rating:
            </label>
            <select
              id="rating"
              name="rating"
              required
              disabled={isPending}
              className="w-full bg-light-100/5 px-4 py-2 rounded-lg text-white border border-gray-600 focus:border-purple-500 focus:outline-none disabled:opacity-50"
            >
              <option value="">Select rating...</option>
              <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
              <option value="4">⭐⭐⭐⭐ (4 stars)</option>
              <option value="3">⭐⭐⭐ (3 stars)</option>
              <option value="2">⭐⭐ (2 stars)</option>
              <option value="1">⭐ (1 star)</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Recommendation'
            )}
          </button>
        </form>
      )}
    </section>
  )
}

export default MovieRecommendation
