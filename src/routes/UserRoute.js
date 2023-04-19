import React, { useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UpperMenu from '../components/Menu/UpperMenu';
import Menu from '../components/Menu/Menu';
import classes from './UserRoute.module.css';
const UserRoute = props => {
  return (
    <div className={classes.container}>
      <UpperMenu />
      <div className={classes.middle}>
        <div className={classes.menu}>
        <Menu />
        </div>
        <div className={classes.content}>
        <Outlet />
        </div>
       
      </div>
    </div>
  );
};
export default UserRoute;
