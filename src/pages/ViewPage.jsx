import { useLoaderData, useNavigate, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import BTN from '../components/MoreBtn'

const ViewPage = ({ deleteItem }) => {

  const item = useLoaderData();
  console.log(item);
  const navigation = useNavigate();
  const genre = item.genre.map((g) => g.name).join(', ');
  const year = item.year.split('-')[0];

  const onDeleteClick = (itemID, type) => {
    const confirm = window.confirm('Are you sure you want to delete this listing');

    if (!confirm) return;

    deleteItem(itemID, type);

    toast.success(`${type} DELETED successfully!`);
    return navigation(`/${type}`)
  };

  return (
    <section className='bg-blue-50 min-h-screen'>
      <div className='container m-auto flex justify-center'>
        <div className='grid md:grid-cols-2 gap-10 w-full max-w-2xl mt-5 p-10'>
          <div className='flex-shrink-0 w-72 h-auto'>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-full objet-cover' />
          </div>
          <div className='flex flex-col gap-4 max-w-lg'>
            <h1 className='text-4xl font-bold mb-6'>{item.title}</h1>
            <p className='text-xs text-justify'>{item.description}</p>
            <div className='text-xs'>
              <p><strong>Country</strong>: {item.country}</p>
              <p><strong>Genre</strong>: {genre || 'N/A'}</p>
              <p><strong>Year</strong>: {year}</p>
              <p><strong>Type</strong>: {item.type}</p>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex justify-end'>
                <Link to={`/edit/${item.type}/${item.id}`} className='bg-color text-white py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]' >EDIT</Link>
              </div>
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