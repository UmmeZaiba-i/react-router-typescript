import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import NavBar from '../components/NavBar';
import {Users} from '../components/Users'; // Ensure this import is correct
import User1 from '../components/users/User1';
import Items from '../components/Items';
import Products from '../components/Products';
import Blog from '../components/BlogApplication/Blog';
import PostDetails from '../components/BlogApplication/PostDetails';

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
            element: <Users />, // Nested route for userId - ok if we dont include also
          },
        ],
      },
      {
        path:'/products',
        element:<Products/>,
        children:[
          {
            path:':id',
          }
        ]
      },
      {
        path:'/blog',
        element:<Blog/>,
        children:[
          {
            path:':id',
            element:<PostDetails/>
          }
        ]
      },
      {
        path: '/items',
        element:<Items/>
      },
      {
        path: '/userdetails',
       element:<User1/>
      },
    ],
  },
  {

  },
]);


