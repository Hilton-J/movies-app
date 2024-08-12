import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Listing from "./Listing";
import Spinner from "./Spinner";
import BTN from './MoreBtn'
// import Movies from '../movies.json' you use this if you're not using a server

const MovieListings = ({ isHome = false }) => {
  //const JobListings = isHome ? Movies.slice(0, 3) : Movies; //if (isHome=true) Movies.slice(0, 3) else Movies

  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiUrl = isHome ? '/api/series?_limit=8' : '/api/series';



      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setSeries(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [isHome]);


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <div>

          {isHome ? < h2 className="text-lg font-bold mb-10 text-center">LATEST SERIES </h2> : <BTN innerText={'ADD'} path={'/add'} />}

          {loading ? (<Spinner />) : (
            <div className="grid md:grid-cols-4-col gap-2 my-4">
              {
                series.map((serie) => (
                  <Listing key={serie.id} movie={serie} />
                ))
              }
            </div>
          )}
          {isHome && <BTN innerText={'MORE'} path={'/series'} />}
        </div>
      </div >
    </section >
  )
};

MovieListings.propTypes = {
  isHome: PropTypes.bool,
}

export default MovieListings
