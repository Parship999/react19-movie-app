import { useEffect, useState, Suspense } from 'react'
import Search from './components/Search.jsx'
import Spinner from './components/Spinner.jsx'
import MovieCard from './components/MovieCard.jsx'
import TrendingMovies, { createTrendingMoviesPromise } from './components/TrendingMovies.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import MovieRecommendation from './components/MovieRecommendation.jsx'
import OptimisticLikes from './components/OptimisticLikes.jsx'
import React19Demo from './components/React19Demo.jsx'
import ReactCompilerDemo from './components/ReactCompilerDemo.jsx'
import { useDebounce } from 'react-use'
import { updateSearchCount } from './appwrite.js'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [searchTerm, setSearchTerm] = useState('');

  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // React 19 feature: Create promise for the use hook
  const [trendingMoviesPromise] = useState(() => createTrendingMoviesPromise());

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <ErrorBoundary>
      <main>
        <div className="pattern"/>

        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
            <p className="text-sm text-gray-100 mt-2">
              ✨ Enhanced with React 19 features: <code className="bg-gray-800 px-1 rounded">use</code> hook,
              Suspense, Error Boundaries, and Form Actions!
            </p>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          {/* React 19 feature: Suspense with the new 'use' hook */}
          <Suspense fallback={
            <div className="trending">
              <h2>🔥 Loading Trending Movies...</h2>
              <Spinner />
            </div>
          }>
            <TrendingMovies moviesPromise={trendingMoviesPromise} />
          </Suspense>

          <section className="all-movies">
            <h2>All Movies</h2>

            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>

          {/* React 19 feature: Form Actions and useTransition */}
          <MovieRecommendation />

          {/* React 19 feature: useOptimistic for optimistic updates */}
          <OptimisticLikes movieTitle="The Matrix" />

          {/* React 19 features overview */}
          <React19Demo />

          {/* React Compiler demonstration */}
          <ReactCompilerDemo />
        </div>
      </main>
    </ErrorBoundary>
  )
}

export default App
