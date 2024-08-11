import { NavLink } from "react-router-dom"


const Main = () => {
  return (
    <section>
      <div>
        <h2>LATEST MOVIES</h2>
        <div>

        </div>
        <NavLink className='bg-color py-1 px-9 rounded-3xl' to={'/movies'}>More</NavLink>
      </div>
    </section>
  )
}

export default Main