import { Link } from 'react-router-dom'
// import Links from './Links'

const Footer = () => {
  return (
    <section className='bg-white  flex flex-col'>
      <footer className='flex justify-center h-16 items-center bg-[#d9d9d9]'>
        <div className='grid grid-cols-3 w-[90%] py-auto text-black' >
          <div>
            <Link to={'/'} className='md:text-2xl hover:text-[#7379ff]'>Enter-Stream</Link>
          </div>
          <div className='flex md:gap-10 gap-5 justify-center items-center md:text-base '>
            <Link className='hover:text-[#7379ff]' to={'/movies'}>MOVIES</Link>
            <Link className='hover:text-[#7379ff]' to={'/series'}>SERIES</Link>
          </div>
          <div className='flex justify-end items-center'><Link to={'/subscribe'} className='hover:text-[#7379ff]'>SUBSCRIBE</Link></div>
        </div>
      </footer>
    </section>
  )
}

export default Footer