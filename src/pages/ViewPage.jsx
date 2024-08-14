import { useLoaderData, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import BTN from '../components/MoreBtn'

const ViewPage = ({ deleteItem, editItem }) => {

  const item = useLoaderData();
  const navigation = useNavigate();
  const genre = item.genre.map((g) => g.name + ', ');
  const year = item.year.split('-')[0];

  const onDeleteClick = (itemID, type) => {
    const confirm = window.confirm('Are you sure you want to delete this listing');

    if (!confirm) return;

    deleteItem(itemID, type);

    toast.success(`${type} DELETED successfully!`);
    return navigation(`/${type}`)
  };

  const onEditClick = (itemID, type) => {

    if (!confirm) return;

    editItem(itemID, type);

    toast.success(`${type} UPDATED successfully!`);
    return navigation(`/${type}`)
  };

  return (
    <section className='bg-blue-50 px-4 py-10 h-screen'>
      <div className='container-xl lg:container m-auto flex justify-center'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='flex justify-end'>
            <img
              src={item.image}
              alt={item.title}
              className='max-w-xs md:max-w-md w-full' />
          </div>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold mb-6'>{item.title}</h1>
            <p className='text-lg mb-6 text-justify'>{item.description}</p>
            <div className='text-lg mb-6'>
              <p><strong>Country</strong>: {item.country}</p>
              <p><strong>Genre</strong>: {genre || 'N/A'}</p>
              <p><strong>Year</strong>: {year}</p>
              <p><strong>Type</strong>: {item.type}</p>
            </div>
            <div className='flex flex-row gap-4'>
              <BTN onClick={() => { onEditClick(item.id, item.type) }} innerText={'EDIT'} path={`/${item.type}`} />
              <BTN onClick={() => { onDeleteClick(item.id, item.type) }} innerText={'DELETE'} path={`/${item.type}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};


ViewPage.propTypes = {
  deleteItem: PropTypes.func,
  editItem: PropTypes.func
};
export default ViewPage