import React, { useState, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import classes from './UpperMenu.module.css';
import { logout } from '../../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBraille,
  faCircleUser,
  faArrowRightFromBracket,
  faTableColumns,
  faAlignJustify,
  faAddressCard,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const UpperMenu = props => {
  // state to store the user data
  const [userData, setuserData] = useState(props.userData);
  // state to change the user role to a more readable format
  const userRoleHandler = userData.role.replace('_admin', '').replace('_', '-').replace('-', ' ');
  // state to store the menu show state
  const [menuShow, setmenuShow] = useState(true);
  // state to store the user roles have checkbox inputs
  const [userRoles, setUserRoles] = useState(props.userRolesHaveCheckBoxInputs);
  // navigate function
  const navigate = useNavigate();
  // choose the menu items based on the user role
  const menuItems = () => {
    if (userData.role === 'tracker') {
      return (
        <div className={classes.list}>
          <ul className={menuShow ? classes.side : ''}>
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
                Schools
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
        </div>
      );
    } else if (userData.role === 'system_admin') {
      return;
    } else if (userRoles.includes(userData.role)) {
      return (
        <div className={classes.list}>
          <ul className={menuShow ? classes.side : ''}>
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
                to='/schools'
                className={({ isActive }) => (isActive ? classes.active : null)}
              >
                <FontAwesomeIcon className={classes.icon} icon={faSchool} />
                Schools
              </NavLink>
            </li>
          </ul>
          {/* <div className={classes.footer}>
            <p>© 2023 All Rights Reserved</p>
          </div> */}
        </div>
      );
    }
    //todo add manager and user roles to the menu
  };
  return (
    <div className={classes.menu}>
      <div className={classes.menuLogo}>
        <div
          onClick={() => {
            setmenuShow(!menuShow);
          }}
          className={classes.btn}
        >
          <FontAwesomeIcon icon={faBraille} className={classes.icon} />
        </div>
        <div className={classes.name}>
          <FontAwesomeIcon icon={faCircleUser} className={classes.icon} />
          <h6>{userRoleHandler}</h6>
        </div>
        {menuItems()}
      </div>

      <div className={classes.left}>
        <div className={classes.user}>
          <FontAwesomeIcon className={classes.icon} icon={faAddressCard} />
        </div>
        <div
          onClick={() => {
            logout();
            navigate('/');
            window.location.reload(true);
          }}
          className={classes.logout}
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className={classes.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
