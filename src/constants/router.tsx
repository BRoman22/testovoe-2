import { createBrowserRouter } from 'react-router-dom';
import { RootLayout, NotFound } from '../layouts';
import { Test, Main } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
]);

export default router;
