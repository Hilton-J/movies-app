import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center min-h-screen h-[60vh] md:h-[80vh]">
      <FaExclamationTriangle className='text-yellow-400 fa-4x mb-4 text-3xl md:text-6xl' />
      <h1 className="text-3xl md:text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-base md:text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-color hover:bg-transparent hover:text-[#7379ff] rounded-md px-3 py-2 md:mt-4"
      >Go Back</Link
      >
    </section>
  )
}

export default NotFoundPage
