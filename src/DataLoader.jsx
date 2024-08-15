export const dataLoader = async ({ params }) => {
  const url = `/api/${params.type}/${params.id}`
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const fetchMovies = async ({ isHome }) => {
  const apiUrl = isHome ? '/api/movies?_limit=8' : '/api/movies';

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
  }
};

export const fetchSeries = async ({ isHome }) => {
  const apiUrl = isHome ? '/api/series?_limit=8' : '/api/series';

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
  }
};



