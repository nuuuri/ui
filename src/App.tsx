import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@pages';

import Layout from '@pages/_layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
