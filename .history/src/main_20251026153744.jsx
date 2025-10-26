import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router.jsx'; // this already includes RouterProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);

