import PropTypes from 'prop-types'

const Card = ({ children }) => {
  return (
    <div className=''>{children}</div>
  )
};

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card