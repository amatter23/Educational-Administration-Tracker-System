import React, { useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import classes from './AdminRouts.module.css';
import AdminTable from '../components/Admin/AdminTable';
import UpperMenu from '../components/Menu/UpperMenu';

const AdminRouts = props => {
  return (
    <div className={classes.container}>
      <UpperMenu />
      <div className={classes.content}>
        <AdminTable />
      </div>
    </div>
  );
};
export default AdminRouts;
