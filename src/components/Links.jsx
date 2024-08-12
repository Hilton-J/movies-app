import PropTypes from 'prop-types'
import { NavLink, Link } from "react-router-dom"

const Links = ({ place }) => {
  let linkClass;
  let CustomLink;
  let textColor;

  if (place === 'nav') {
    CustomLink = NavLink;
    linkClass = ({ isActive }) => isActive ? 'text-color' : '';
    textColor = 'text-white';
  }
  else {
    CustomLink = Link;
    textColor = 'text-black';
  }



  return (
    <div className={`${textColor} grid grid-cols-3 w-[90%] py-auto mt-9 `} >
      <div>
        <CustomLink to={'/'} className='hover:text-[#7379ff]'><span className='text-[#7379ff]'>Enter-</span>Stream</CustomLink>
      </div>


      <div className='flex gap-10 justify-center'>
        <CustomLink className={`${linkClass} hover:text-[#7379ff]`} to={'/movies'}>MOVIES</CustomLink>
        <CustomLink className={`${linkClass} hover:text-[#7379ff]`} to={'/series'}>SERIES</CustomLink>
      </div>

      <div className='flex justify-end'><CustomLink to={'/subscribe'} className={place === 'nav' ? 'bg-color py-1 px-9 rounded-3xl hover:bg-transparent ' : 'hover:text-[#7379ff]'}>SUBSCRIBE</CustomLink></div>
    </div >
  )
};

Links.propTypes = {
  place: PropTypes.string.isRequired
};

export default Links