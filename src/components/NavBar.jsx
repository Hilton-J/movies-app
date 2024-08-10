import { NavLink } from 'react-router-dom'

const NavBar = () => {


  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-bgimage bg-no-repeat bg-cover bg-center">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* <!-- Logo --> */}


            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className="text-white hover:text-[#7379ff]"
                >MOVIES</NavLink
                >
                <NavLink
                  to="/jobs"
                  className="text-white hover:text-[#7379ff]"
                >SERIES</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar