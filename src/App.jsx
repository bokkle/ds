import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Home from './components/home/Home';
import PageNotFound from './components/notfound/PageNotFound';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
