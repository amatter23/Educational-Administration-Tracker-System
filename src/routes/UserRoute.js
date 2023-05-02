import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UpperMenu from '../components/Menu/UpperMenu';
import classes from './UserRoute.module.css';
const UserRoute = props => {
  const [userData, UpdateUserData] = useState(props.userData);
  return (
    <div className={classes.container}>
      <div className={classes.menu}>
        <UpperMenu userRolesHaveCheckBoxInputs={props.userRolesHaveCheckBoxInputs} userData={userData} />
      </div>
      <div className={classes.middle}>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default UserRoute;
