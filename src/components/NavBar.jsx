import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import { useState } from 'react';

const NavBar = ({ header }) => {
  const linkClass = ({ isActive }) => isActive ? 'text-color hover:text-[#7379ff]' : 'hover:text-[#7379ff]';


  return (
    <header className='bg-white bg-bgimage bg-no-repeat bg-cover h-[23rem] bg-center flex flex-col'>
      <nav className='flex justify-center'>
        <div className='text-white grid grid-cols-3 w-[90%] py-auto mt-9 ' >
          <NavLink to={'/'} className='hover:text-[#7379ff]'><span className='text-[#7379ff] hover:text-white'>Enter-</span>Stream</NavLink>

          <div className='flex gap-10 justify-center'>
            <NavLink className={linkClass} to={'/movies'}>MOVIES</NavLink>
            <NavLink className={linkClass} to={'/series'}>SERIES</NavLink>
          </div>

          <div className='flex justify-end'><NavLink to={'/subscribe'} className='bg-color py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]'>SUBSCRIBE</NavLink></div>
        </div>
      </nav>

      <div className='flex flex-1 justify-center items-center'>
        <h1 className='text-white text-4xl'>{header}</h1>
      </div>
    </header>
  )
};

NavBar.propTypes = {
  header: PropTypes.string
};

export default NavBar