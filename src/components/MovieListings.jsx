import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MovieListing from "./MovieListing";
import Spinner from "./Spinner";
// import Movies from '../movies.json' you use this if you're not using a server

const MovieListings = ({ isHome = false }) => {
  //const JobListings = isHome ? Movies.slice(0, 3) : Movies; //if (isHome=true) Movies.slice(0, 3) else Movies

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/table?_limit=6' : '/api/table';

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Movies" : "Browse Movies"}
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {movies.map((job) => (
              <MovieListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

MovieListings.propTypes = {
  isHome: PropTypes.bool,
};

export default MovieListings;
