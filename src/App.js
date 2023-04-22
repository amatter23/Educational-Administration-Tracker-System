import {
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
  router,
  redirect,
  loader,
} from 'react-router-dom';
import React, { useState } from 'react';
import TrackerForm from './components/Tracker/TrackerForm/TrackerForm';
import AdminRouts from './routes/AdminRouts.js';
import UserRoute from './routes/UserRoute.js';
import TrackerSchools from './components/Tracker/TrackerSchools/TrackerSchools';
import './App.css';

function App() {
  const [userData, UpdateUserData] = useState({
    role: 'tracker',
  });
  const routerUserTracker = createBrowserRouter([
    {
      path: '/',
      element: <UserRoute />,
      children: [
        {
          path: '/',
          element: <TrackerSchools />,
        },
        {
          path: '/trackerForm',
          element: <TrackerForm />,
        },
      ],
    },
  ]);
  const routerAdmin = createBrowserRouter([
    {
      path: '/',
      element: <AdminRouts />,
    },
  ]);
  return (
    <>
      {userData.role === 'admin' ? (
        <RouterProvider router={routerAdmin} />
      ) : (
        <RouterProvider router={routerUserTracker} />
      )}
    </>
  );
}

export default App;
