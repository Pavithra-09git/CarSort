import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './assets/Component/Home';
import ShopDetails from './'; // create a page to show card by id
import CardDetailPage from './assets/Component/CardDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // main app
    children: [
      {
        index: true,
        element: <Home />, // optional home page
      },
      {
        path: '/shop/:id',
        element: <CardDetailPage />, // dynamic page for individual shop
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

