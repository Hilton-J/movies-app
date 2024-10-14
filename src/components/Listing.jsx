import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Listing = ({ movie }) => {


  return (
    <div key={movie.id} className="bg-white shadow-lg overflow-hidden h-full ">
      <div className="h-full">
        <Link to={`/${movie.type}/${movie.id}`}>
          <img
            src={movie.image}
            alt={movie.title}
            className='w-full h-full object-cover'
          />
        </Link>
      </div>
    </div>
  )
};

Listing.propTypes = {
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

export default Listing