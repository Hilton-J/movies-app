import MovieListings from "../components/MovieListings"
import SeriesListings from "../components/SeriesListings"


const HomePage = () => {

  return (
    <>
      <MovieListings isHome={true} />
      <SeriesListings isHome={true} />
    </>
  )
}

export default HomePage