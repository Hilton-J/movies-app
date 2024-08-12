import PropTypes from 'prop-types'

const Item = ({ arr }) => {
  return (
    <>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" alt="Avengers Endgame" />
      </div>
      <div>
        <h1>{arr.title}</h1>
        <p></p>
        <div>
          <p>Country:  </p>
          <p>Genre: Action, Adventure, Science Fiction</p>
          <p>Year: </p>
          <p>Type: </p>
        </div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  )
};

Item.propTypes = {
  arr: PropTypes.object
};

export default Item