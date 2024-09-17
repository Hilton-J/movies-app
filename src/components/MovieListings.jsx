import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Listing from './Listing'
import Spinner from "./Spinner";
import BTN from './MoreBtn'

const MovieListings = ({ isHome = false }) => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      const apiUrl = isHome ? '/api/movies?_limit=8' : '/api/movies';
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
    loadMovies();
  }, [isHome]);

  return (
    <section className="bg-blue-50 md:px-4 py-10 min-h-screen">
      <div className="container-xl lg:container m-auto flex justify-center">
        <div className="w-[70%]">
          {isHome ? < h2 className="text-lg font-bold mb-10 text-center">LATEST MOVIES </h2> : <BTN innerText={'ADD'} path={'/add'} />}

          {loading ? (<Spinner />) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4-col gap-x-10 gap-y-5 my-4">
              {
                movies.map((movie) => (
                  <Listing key={movie.id} movie={movie} />
                ))
              }
            </div>
          )}
          {isHome && <BTN innerText={'MORE'} path={'/movies'} />}
        </div>
      </div>
    </section >
  )
};

MovieListings.propTypes = {
  isHome: PropTypes.bool,
};

export default MovieListings
