// import PropTypes from 'prop-types'

const ViewItem = () => {
  return (
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" alt="Avengers Endgame" />
      </div>
      <div>
        <h1>Avengers Endgame</h1>
        <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>
        <div>
          <p><strong>Country:</strong> USA</p>
          <p><strong>Genre:</strong> Action, Adventure, Science Fiction</p>
          <p><strong>Year:</strong> 2019</p>
          <p><strong>Type:</strong> Movie</p>
        </div>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ViewItem