import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Listing from "./Listing";
import Spinner from "./Spinner";
import { Link } from "react-router-dom"
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
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'LATEST SERIES' : 'BROWSE SERIES'}
          </h2>
          {loading ? (<Spinner />) : (
            <div className="grid md:grid-cols-4-col gap-2 mb-4">
              {
                series.map((serie) => (
                  <Listing key={serie.id} movie={serie} />
                ))
              }
            </div>
          )}
          <div className='flex justify-end'>
            <Link to={'/subscribe'} className='bg-color text-white py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]'>More</Link>
          </div>
        </div>
      </div>
    </section >
  )
};

MovieListings.propTypes = {
  isHome: PropTypes.bool,
}

export default MovieListings
