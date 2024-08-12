// import ArrayOb from './Item'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ViewItem = () => {
  const { type, id } = useParams();

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
      {/* {loading
        &&
        <ArrayOb arr={item} />} */}
    </div>
  )
};

export default ViewItem