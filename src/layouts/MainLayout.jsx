import { Outlet, useLocation, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const MainLayout = () => {
  const location = useLocation();
  const { type, id } = useParams();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {

    const pathParts = location.pathname.split('/');
    const arrayName = pathParts[1];
    const id = pathParts[2];
    console.log(arrayName);

    //TODO: implemement what ChatGPT told you
    let title = '';
    switch (location.pathname.split('/')[1]) {
      case 'series':
        title = 'LATEST SERIES';
        break;
      case 'movies':
        title = 'LATEST MOVIES';
        break;
      case `${arrayName}/${id}`:
        fetchTitle(type, id).then((showTitle) => {
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
  }, [location, id, type]);



  return (
    <>
      <NavBar header={pageTitle} />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default MainLayout;

const fetchTitle = async (type, id) => {
  const url = `/api/${type}/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.title;
};