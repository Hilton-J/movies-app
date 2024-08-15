import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import dataCountry from '../country.json'
import Multiselect from 'multiselect-react-dropdown'
import dataGenre from '../genre.json'


const AddItem = ({ addItemSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [genres, setGenres] = useState('');
  const navigate = useNavigate();

  function convertToBase64(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result);
        console.log("File converted to base64:", reader.result);
      };
      reader.onerror = (error) => {
        console.log("Error: ", error);
      };
    }
  }

  const submitForm = async (e) => {
    e.preventDefault();

    const newItem = {
      title,
      type,
      description,
      genre: genres.map(genre => genre),
      country,
      year,
      image
    };

    await addItemSubmit(newItem, type);

    toast.success(`${type} ADDED successfully!`);

    return navigate(`/${type}`);

  };

  const handleGenreSelect = (selectedList) => {
    setGenres(selectedList);
  };

  const handleGenreRemove = (selectedList) => {
    setGenres(selectedList);
  };

  return (
    <section className="flex min-h-screen justify-center">
      <div className='grid md:grid-cols-2 gap-8 w-full max-w-3xl mt-5 p-8'>
        <div className="flex flex-col justify-center items-center bg-gray-100 h-fit min-h-[200px] md:min-h-[400px]">
          {!image ? (<span>Upload Movie Poster</span>) : (
            <img src={image} className='w-full h-full object-cover' />)}
        </div>
        <form className="flex flex-col space-y-2 " onSubmit={submitForm}>

          {/* ================================ NAME ================================================= */}
          <div>
            <label htmlFor='title' className='block mb-2'>Movie/Series Name</label>
            <input
              type="text"
              id='title'
              name='title'
              placeholder="Movie / Series Name"
              className='w-full p-2 border border-gray-300 rounded-lg text-sm '
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
          </div>

          {/* ================================ IMAGE ================================================= */}
          <div>
            <label htmlFor='image' className='block mb-2'>Movie/Series Image</label>
            <input
              type="file"
              id='image'
              name='image'
              placeholder="Movie / Series Name"
              className='w-full p-2 border border-gray-300 rounded-lg text-sm '
              required
              onChange={convertToBase64} />
          </div>

          {/* ================================ DESCRIPTION ================================================= */}
          <div>
            <label
              htmlFor="description"
              className="block mb-2"
            >Description</label>
            <textarea
              id="description"
              name="description"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              rows="4"
              required
              placeholder="Movie / Series Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          {/* ================================ GENRE ================================================= */}
          <div>
            <label
              htmlFor="genre"
              className="block mb-2"
            >Genre</label>
            <Multiselect
              id='genre'
              name='genre'
              options={dataGenre.genres.map(genre => ({ name: genre, id: genre }))} // Convert to format expected by Multiselect
              selectedValues={setGenres} // Preselected value to persist in dropdown
              onSelect={handleGenreSelect} // Function will trigger on select event
              onRemove={handleGenreRemove} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
            />
          </div>

          {/* ================================ COUNTRY ================================================= */}
          <div>
            <label htmlFor='country' className='block mb-2'>Country</label>
            <select
              id="country"
              name="country"
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
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

          {/* ================================ YEAR ================================================= */}
          <div>
            <label htmlFor='year' className='block mb-2'>Year</label>
            <input
              type="date"
              id='year'
              name='year'
              placeholder="2001"
              className='w-full p-2 border border-gray-300 rounded-lg text-sm '
              required
              value={year}
              onChange={(e) => setYear(e.target.value)} />
          </div>

          {/* ================================ TYPE ================================================= */}
          <div className="flex">
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