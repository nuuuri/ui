import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@pages';

import Layout from '@pages/_layout';
import ButtonPage from '@pages/button';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/button',
        element: <ButtonPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
