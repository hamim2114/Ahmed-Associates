import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import './App.scss'

const Footer = lazy(() => import('./components/footer/Footer'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PracticeAreasPage = lazy(() => import('./pages/practiceAreasPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const CareerPage = lazy(() => import('./pages/CareerPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  const Layout = () => {
    return (
      <>
        <ScrollToTop />
        <Suspense fallback={<div className='loader'><img src="/Eclipse.svg" alt="" /></div>}>
          <Navbar />
          <Outlet />
          <Footer />
        </Suspense>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/about',
          element: <AboutPage />,
        },
        {
          path: '/practice-areas',
          element: <PracticeAreasPage />,
        },
        {
          path: '/blog',
          element: <BlogPage />,
        },
        {
          path: '/team',
          element: <TeamPage />,
        },
        {
          path: '/career',
          element: <CareerPage />,
        },
        {
          path: '/contact',
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
