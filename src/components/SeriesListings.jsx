import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Listing from "./Listing";
import Spinner from "./Spinner";
import BTN from './MoreBtn';
import { fetchData } from "../DataLoader";

const SeriesListings = ({ isHome = false }) => {

  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSeries = async () => {

      try {
        const data = await fetchData(isHome);
        setSeries(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    loadSeries();
  }, [isHome]);


  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto flex justify-center">
        <div className="w-[70%]">

          {isHome ? < h2 className="text-lg font-bold mb-10 text-center">LATEST SERIES </h2> : <BTN innerText={'ADD'} path={'/add'} />}

          {loading ? (<Spinner />) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4-col gap-x-10 gap-y-5 my-4">
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

SeriesListings.propTypes = {
  isHome: PropTypes.bool,
}

export default SeriesListings
