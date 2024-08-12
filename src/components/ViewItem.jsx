// import ArrayOb from './Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ViewItem = () => {
  const { id, type } = useParams();

  console.log(id, type);

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = `/api/${type}/${id}`;

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setItem(data);
        console.log(data);
      }
      catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchItem();
  }, [apiUrl]);

  console.log(item);
  console.log(loading);
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
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
};

export default ViewItem