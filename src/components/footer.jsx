import { Link } from 'react-router-dom'

const Footer = () => {
  const linkClass = ({ isActive }) => isActive ? 'text-color hover:text-[#7379ff]' : 'hover:text-[#7379ff]';
  return (
    <section className='h-1'>
      <footer className='flex justify-center text-black'>
        <div className='text-white grid grid-cols-3 w-[90%] py-auto mt-9 ' >
          <div>
            <Link to={'/'} className='hover:text-[#7379ff]'><span className='text-[#7379ff]'>Enter-</span>Stream</Link>
          </div>
          <div className='flex gap-10 justify-center'>
            <Link className={linkClass} to={'/movies'}>MOVIES</Link>
            <Link className={linkClass} to={'/series'}>SERIES</Link>
          </div>
          <div className='flex justify-end'><Link to={'/subscribe'} className='bg-color py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]'>SUBSCRIBE</Link></div>
        </div>
      </footer>
    </section>
  )
}

export default Footer