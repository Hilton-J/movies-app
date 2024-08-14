// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useLoaderData, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import BTN from './MoreBtn'

const ViewItem = ({ deleteItem }) => {
  // using useParam & useEffect to fetch data
  // const { id, type } = useParams();

  // console.log(id, type);

  // const inItem = {
  //   "id": "",
  //   "title": "",
  //   "type": "",
  //   "description": "",
  //   "country": "",
  //   "year": ""
  // };

  // const [item, setItem] = useState(inItem);
  // const [loading, setLoading] = useState(true);
  // let apiUrl = `/api/${type}/${id}`;

  // useEffect(() => {
  //   const fetchItem = async () => {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setItem(data);
  //     }
  //     catch (error) {
  //       console.log('Error fetching data', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchItem();
  // }, [apiUrl]);

  const item = useLoaderData();
  const navigation = useNavigate();

  const onDeleteClick = (itemID, type) => {
    const confirm = window.confirm('Are you sure you want to delete this listing');

    if (!confirm) return;

    deleteItem(itemID, type);

    toast.success(`${type} deleted successfully!`);
    return navigation(`/${type}`)
  };

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid md:grid-cols-2'>
          <div className='size-full'>
            <img src={item.image} alt={item.title} />
          </div>
          <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div>
              <p>Country:  {item.country}</p>
              <p>Genre: {''}</p>
              <p>Year: {item.year}</p>
              <p>Type: {item.type}</p>
            </div>
            <div className='flex flex-row gap-4'>
              <BTN onClick={() => { onDeleteClick(item.id, item.type) }} innerText={'EDIT'} path={`/${item.type}`} />
              <BTN onClick={() => { onDeleteClick(item.id, item.type) }} innerText={'DELETE'} path={`/${item.type}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};


ViewItem.propTypes = {
  deleteItem: PropTypes.func
};
export default ViewItem