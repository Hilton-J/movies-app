import PropTypes from 'prop-types'
import { NavLink, Link } from "react-router-dom"

const Links = ({ place }) => {
  let linkClass;
  let CustomLink;
  let textColor;

  if (place === 'nav') {
    CustomLink = NavLink;
    linkClass = ({ isActive }) => isActive ? 'text-color' : '';
    textColor = 'text-white mt-9';
  }
  else {
    CustomLink = Link;
    textColor = 'text-black';
  }



  return (
    <div className={`${textColor} grid grid-cols-3 w-[90%] py-auto`} >
      <div>
        <CustomLink to={'/'} className='hover:text-[#7379ff] text-2xl'><span className='text-[#7379ff]'>Enter-</span>Stream</CustomLink>
      </div>


      <div className='flex gap-10 justify-center items-center'>
        <CustomLink className={`${linkClass} hover:text-color`} to={'/movies'}>MOVIES</CustomLink>
        <CustomLink className={`${linkClass} hover:text-color`} to={'/series'}>SERIES</CustomLink>
      </div>

      <div className='flex justify-end items-center'><CustomLink to={'/subscribe'} className={place === 'nav' ? 'bg-color py-1 px-9 rounded-3xl hover:bg-transparent ' : 'hover:text-[#7379ff]'}>SUBSCRIBE</CustomLink></div>
    </div >
  )
};

Links.propTypes = {
  place: PropTypes.string.isRequired
};

export default Links