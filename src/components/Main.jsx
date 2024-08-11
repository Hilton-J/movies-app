import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import { useState, useEffect } from 'react'




const Main = () => {
  const [show, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      '/api'

      try {
        const res = await fetch(`/api/`);
        const data = await res.json();
        setShows(data);
      }
      catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchShows();
  }, [])


  return (
    <section>
      <div>
        <div>
          <h2>LATEST MOVIES</h2>
          <div className="grid grid-cols-4-col">
            {
              show.map((dt) => {

                <div key={dt.id}>

                </div>;
              })
            }
          </div>
          <NavLink className='bg-color py-1 px-9 rounded-3xl' to={'/series'}>More</NavLink>
        </div>


        <div>
          <h2>LATEST SERIES</h2>
          <div>

          </div>
          <NavLink className='bg-color py-1 px-9 rounded-3xl' to={'/series'}>More</NavLink>
        </div>

      </div>
    </section>
  )
};

Main.proptypes = {
  data: PropTypes.node.isRequired,
};
export default Main