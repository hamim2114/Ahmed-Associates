import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import './App.scss'

const Footer = lazy(() => import('./components/footer/Footer'));
import Navbar from './components/navbar/Navbar';
const JobPage = lazy(() => import('./pages/JobPage'));
const JobSingle = lazy(() => import('./components/jobSingle/JobSingle'));
const SingleBlogPage = lazy(() => import('./pages/SingleBlogPage'));
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
        <Navbar />
        <Suspense fallback={<div className='loader'><img src="/Eclipse.svg" alt="" /></div>}>
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
          path: '/blog/:id',
          element: <SingleBlogPage />,
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
        {
          path: '/jobs',
          element: <JobPage />,
        },
        {
          path: '/jobs/:id',
          element: <JobSingle />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
