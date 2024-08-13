import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const MoreBtn = ({ innerText, path, onClick = null }) => {
  return (
    <>
      <div className='flex justify-end'>
        <Link to={path} className='bg-color text-white py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]' onClick={onClick}>{innerText}</Link>
      </div>
    </>
  )
};

MoreBtn.propTypes = {
  innerText: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func
};
export default MoreBtn