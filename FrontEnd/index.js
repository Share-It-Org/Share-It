import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, createBrowserRouter, RouterProvider}from 'react-router-dom';
import App from './App.jsx';
import Login from './routes/Login.jsx'
import ErrorPage from './src/error-page.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path:"login/",
        element: <Login />,
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)