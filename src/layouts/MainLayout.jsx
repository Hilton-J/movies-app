import { Outlet, useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const MainLayout = () => {
  const location = useLocation();
  const { id } = useParams();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    let title = '';
    switch (location.pathname.split('/')[1]) {
      case 'series':
        title = 'LATEST SERIES';
        break;
      case 'movies':
        title = 'LATEST MOVIES';
        break;
      case 'view':
        fetchTitle(id).then((showTitle) => {
          setPageTitle(showTitle);
        });
        return;
      case 'add':
        title = 'ADD A MOVIE/SERIES';
        break;
      default:
        title = '';
    }
    setPageTitle(title);
  }, [location, id]);



  return (
    <>
      <NavBar header={pageTitle} />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default MainLayout;

const fetchTitle = async (id) => {
  const res = await fetch(`/api/${id}`);
  const data = await res.json();
  return data.title;
};