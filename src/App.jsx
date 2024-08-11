import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import SeriesPage from './pages/SeriesPage'
import MoviesPage from './pages/MoviesPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/series' element={<SeriesPage />} />
      <Route path='/movies' element={<MoviesPage />} />

      <Route path='*' element={<NotFoundPage />} />

    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App