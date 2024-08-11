import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const linkClass = ({ isActive }) => isActive ? 'text-color hover:text-[#7379ff]' : 'hover:text-[#7379ff]';

  return (
    <header className='bg-white bg-bgimage bg-no-repeat bg-cover h-[23rem] bg-center'>
      <nav className='flex justify-center'>
        <div className='text-white grid grid-cols-3 w-[90%] py-auto mt-16'>
          <NavLink to={'/'} className=''><span className='text-[#7379ff]'>Enter-</span>Stream</NavLink>

          <div className='flex gap-10 justify-center'>
            <NavLink className={linkClass} to={'/movies'}>MOVIES</NavLink>
            <NavLink className={linkClass} to={'/series'}>SERIES</NavLink>
          </div>

          <div className='flex justify-end'><NavLink to={'/subscribe'} className='bg-color py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]'>SUBSCRIBE</NavLink></div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar