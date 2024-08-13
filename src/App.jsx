import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, /*useLocation*/ } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import SeriesPage from './pages/SeriesPage'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'
import AddPage from './pages/AddPage'
import ViewPage from './pages/ViewPage'
import { dataLoader } from './DataLoader'


const App = () => {



  //ADD NEW JOB
  // const addJob = async (newJob) => {
  //   await fetch('/api/jobs', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newJob),
  //   });
  //   return;
  // };


  //DELETE item: movie or series
  const deleteItem = async (id, path) => {
    await fetch(`/api/${path}/${id}`, {
      method: 'DELETE'
    });
    return;
  };

  //UPDATE JOB
  // const updateJob = async (job) => {
  //   await fetch(`/api/jobs/${job.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(job),
  //   });
  //   return;
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/:type/:id' element=
          {<ViewPage deleteItem={deleteItem} />} loader={dataLoader} />
        <Route path='/add' element={<AddPage />} />
        <Route path='*' element={<NotFoundPage />} />

      </Route>
    )
  )



  return <RouterProvider router={router} />
}

export default App