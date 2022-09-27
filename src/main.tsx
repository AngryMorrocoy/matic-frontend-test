import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Pages
import App from './App';
import Landing from './components/pages/Landing';
import ArticlesCRUD from './components/pages/ArticlesCRUD';
// CSS Variables
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Landing /> },
      {
        path: 'create-article/',
        element: (
          <ArticlesCRUD />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
