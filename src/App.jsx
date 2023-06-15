import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </>
    )
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: '/about',
          element: <AboutPage/>
        },
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
