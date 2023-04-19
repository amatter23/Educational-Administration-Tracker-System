import React, { useState, useEffect } from 'react';
import classes from './Menu.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTableColumns,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const Menu = props => {
  const [userData, setuserData] = useState({
    role: 'tracker',
  });
  //ceate function to return the menu items based on the role
  const menuItems = () => {
    if (userData.role === 'tracker') {
      return (
        <div className={classes.list}>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? classes.active : null)}
                end
              >
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faTableColumns}
                />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/trackerForm'
                className={({ isActive }) => (isActive ? classes.active : null)}
              >
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faAlignJustify}
                />
                New Form
              </NavLink>
            </li>
          </ul>
          {/* <div className={classes.footer}>
            <p>© 2023 All Rights Reserved</p>
          </div> */}
        </div>
      );
    }
  };
  return <>{menuItems()}</>;
};

export default Menu;
