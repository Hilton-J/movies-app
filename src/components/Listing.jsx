import PropTypes from 'prop-types'
// import { FaMapMarker } from "react-icons/fa";
import { Link } from 'react-router-dom'

const MovieListing = ({ movie }) => {


  return (
    <div key={movie.id} className="bg-white rounded-xl shadow-md relative ">
      {/*================= TYPE & TITLE ================================*/}
      <div className="text-gray-600"><Link to={`/${movie.type}/${movie.id}`}><img src={movie.image} /></Link>
      </div>
    </div>
  )
};

MovieListing.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image: PropTypes.string
  }).isRequired
};

export default MovieListing