import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import SeriesPage from './pages/SeriesPage'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'
import AddPage from './pages/AddPage'
import ViewPage from './pages/ViewPage'
import EditPage from './pages/EditPage'
import { dataLoader } from './DataLoader'
import { updateItem, deleteItem, addItem } from './API/apiRequests'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/series' element={<SeriesPage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/:type/:id' element={<ViewPage deleteItem={deleteItem} />} loader={dataLoader} />
        <Route path='/edit/:type/:id' element={<EditPage editItemSubmit={updateItem} />} loader={dataLoader} />
        <Route path='/add' element={<AddPage addItemSubmit={addItem} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
};

export default App