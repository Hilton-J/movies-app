import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import dataCountry from '../country.json'

const AddItem = ({ addItemSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const newItem = {
      title,
      type,
      description,
      country,
      year
    };

    await addItemSubmit(newItem, type);

    toast.success('ADDED successfully!');
    console.log(type);
    return navigate(`/${newItem.type}`);

  };

  return (
    <section className="flex p-5 min-h-screen justify-center items-center">
      <div className='grid grid-cols-[30%_40%] gap-[10%] w-3/4 h-'>
        <div className="flex-1 flex justify-center items-center bg-gray-100">
          <span>Upload Movie Poster</span>
        </div>
        <form className="flex-2 flex flex-col" onSubmit={submitForm}>

          <div>
            <label htmlFor='title' className='block mb-2'>Movie/Series Name</label>
            <input
              type="text"
              id='title'
              name='title'
              placeholder="Movie / Series Name"
              className='w-full p-2 mb-4 border border-gray-300 rounded-lg text-sm '
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2"
            >Description</label>
            <textarea
              id="description"
              name="description"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-sm"
              rows="4"
              required
              placeholder="Movie / Series Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor='country' className='block mb-2'>Country</label>
            <select
              id="country"
              name="country"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-sm"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              {dataCountry.map((country) => (
                <option key={country.code} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='year' className='block mb-2'>Year</label>
            <input
              type="date"
              id='year'
              name='year'
              placeholder="2001"
              className='w-full p-2 mb-4 border border-gray-300 rounded-lg text-sm '
              required
              value={year}
              onChange={(e) => setYear(e.target.value)} />
          </div>

          <div className="flex mb-4">
            <div className='flex-1'>
              <input
                type="radio"
                id="movie"
                name="type"
                value='movies'
                onChange={(e) => setType(e.target.value)}
                checked={type === 'movies'}
                required />
              <label htmlFor="movie" className='ml-2'>Movie</label>
            </div>
            <div className='flex-1'>
              <input
                type="radio"
                id="series"
                name="type"
                value='series'
                onChange={(e) => setType(e.target.value)}
                checked={type === 'series'}
                required
              />
              <label htmlFor="series" className='ml-2'>Series</label>
            </div>
          </div>

          <button className='bg-color text-white py-1 px-9 rounded-3xl hover:bg-transparent hover:text-[#7379ff]'
            type='submit'>SAVE</button>
        </form>
      </div>
    </section>
  )
};


AddItem.propTypes = {
  addItemSubmit: PropTypes.func
}
export default AddItem