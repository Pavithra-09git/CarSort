import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './assets/Component/Home';
import CardDetailPage from './assets/Component/CardDetailPage';

 export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop/:id', element: <CardDetailPage /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

