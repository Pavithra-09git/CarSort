import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Home';
import ShopDetails from './ShopDetails'; // create a page to show card by id

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
        path: '/shop/:cardId',
        element: <Card />, // dynamic page for individual shop
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

