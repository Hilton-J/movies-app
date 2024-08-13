// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { useLoaderData, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

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
    <div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" alt="Avengers Endgame" />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div>
          <p>Country:  {item.country}</p>
          <p>Genre: Action, Adventure, Science Fiction</p>
          <p>Year: {item.year}</p>
          <p>Type: {item.type}</p>
        </div>
        <div>
          <button >Edit</button>
          <button onClick={() => { onDeleteClick(item.id, item.type) }}>Delete</button>
        </div>
      </div>
    </div>
  )
};


ViewItem.propTypes = {
  deleteItem: PropTypes.func
};
export default ViewItem