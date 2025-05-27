import { use } from 'react'
import { getTrendingMovies } from '../appwrite.js'

// React 19 feature: Using the new 'use' hook for data fetching
// This creates a promise that can be consumed by the 'use' hook
const createTrendingMoviesPromise = () => {
  return getTrendingMovies()
}

const TrendingMovies = ({ moviesPromise }) => {
  // React 19 feature: The 'use' hook can consume promises directly
  // This will suspend the component until the promise resolves
  const trendingMovies = use(moviesPromise)

  if (!trendingMovies || trendingMovies.length === 0) {
    return null
  }

  return (
    <section className="trending">
      <h2>🔥 Trending Movies (React 19 Feature)</h2>
      <p className="text-sm text-gray-100 mb-4">
        This section uses React 19's new <code className="bg-gray-800 px-1 rounded">use</code> hook for data fetching!
      </p>
      
      <ul>
        {trendingMovies.map((movie, index) => (
          <li key={movie.$id}>
            <p>{index + 1}</p>
            <img src={movie.poster_url} alt={movie.title} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TrendingMovies
export { createTrendingMoviesPromise }
