// import { Link } from 'react-router-dom'
import Links from './Links'

const Footer = () => {
  // const linkClass = ({ isActive }) => isActive ? 'text-color hover:text-[#7379ff]' : 'hover:text-[#7379ff]';
  return (
    <section className='h-1'>
      <footer className='flex justify-center '>
        {/* <div className='grid grid-cols-3 w-[90%] py-auto mt-9 text-black' >
          <div>
            <Link to={'/'} className='hover:text-[#7379ff]'><span>Enter-</span>Stream</Link>
          </div>
          <div className='flex gap-10 justify-center'>
            <Link className={linkClass} to={'/movies'}>MOVIES</Link>
            <Link className={linkClass} to={'/series'}>SERIES</Link>
          </div>
          <div className='flex justify-end'><Link to={'/subscribe'} className='hover:text-[#7379ff]'>SUBSCRIBE</Link></div>
        </div> */}
        <Links place='footer' />
      </footer>
    </section>
  )
}

export default Footer