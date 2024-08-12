import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Listing from './Listing'
import Spinner from "./Spinner";
import BTN from './MoreBtn'
// import Movies from '../movies.json' you use this if you're not using a server

const MovieListings = ({ isHome = false }) => {
  //const JobListings = isHome ? Movies.slice(0, 3) : Movies; //if (isHome=true) Movies.slice(0, 3) else Movies

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
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
    fetchMovies();
  }, [isHome]);

  console.log(movies);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <div>
          {isHome ? < h2 className="text-lg font-bold mb-10 text-center">LATEST MOVIES </h2> : <BTN innerText={'ADD'} path={'/add'} />}

          {loading ? (<Spinner />) : (
            <div className="grid md:grid-cols-4-col gap-2 my-4">
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
}

export default MovieListings
