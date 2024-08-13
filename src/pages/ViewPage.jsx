import ViewItem from '../components/ViewItem'
import PropTypes from 'prop-types'

const ViewPage = ({ deleteItem }) => {
  return (
    <div><ViewItem deleteItem={deleteItem} /></div>
  )
};

ViewPage.propTypes = {
  deleteItem: PropTypes.func
};

export default ViewPage