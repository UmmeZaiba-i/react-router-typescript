import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import NavBar from '../components/NavBar';
import {Users} from '../components/Users'; // Ensure this import is correct

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/users',
        element: <Users />, // Use Outlet here to render nested routes
        children: [
          {
            path: ':userId',
            element: <Users />, // Nested route for userId
          },
        ],
      },
    ],
  },
]);
