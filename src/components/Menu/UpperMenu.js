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
  faPlay,
  faBarsProgress,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
// import translate file
import { useTranslation } from 'react-i18next';
const UpperMenu = props => {
  // implement the translation variable
  const { t } = useTranslation();
  // state to store the user data
  const [userData, setuserData] = useState(props.userData);
  // state to change the user role to a more readable format
  const userRoleHandler = userData.role
    .replace('_admin', '')
    .replace('_', '-')
    .replace('-', ' ');
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
                {t('Schools')}
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
                {t('New Form')}
              </NavLink>
            </li>
          </ul>
        </div>
      );
    } else if (userData.role === 'system_admin') {
      return;
    } else if (
      userRoles.includes(userData.role) ||
      userData.role === 'laboratories_admin' ||
      userData.role === 'workers_affairs_admin' ||
      userData.role === 'students_affairs_admin' ||
      userData.role === 'quality_admin' ||
      userData.role === 'teachers_admin'
    ) {
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
                {t('Dashboard')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/schools'
                className={({ isActive }) => (isActive ? classes.active : null)}
              >
                <FontAwesomeIcon className={classes.icon} icon={faSchool} />
                {t('Schools')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/plan'
                className={({ isActive }) => (isActive ? classes.active : null)}
              >
                <FontAwesomeIcon className={classes.icon} icon={faPlay} />
                {t('Department Plan')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/managementPlan'
                className={({ isActive }) => (isActive ? classes.active : null)}
              >
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={faBarsProgress}
                />
                {t('Management Plan')}
              </NavLink>
            </li>
          </ul>
          {/* <div className={classes.footer}>
            <p>© 2023 All Rights Reserved</p>
          </div> */}
        </div>
      );
    } else if (userData.role === 'manager') {
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
                {t('Dashboard')}
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
        <div
          onClick={() => {
            navigate('/');
          }}
          className={classes.name}
        >
          <FontAwesomeIcon icon={faCircleUser} className={classes.icon} />
          <h6>{t(userRoleHandler)}</h6>
        </div>
        {menuItems()}
      </div>

      <div className={classes.left}>
        <div
          className={classes.user}
          onClick={() => {
            navigate('/userInformation');
          }}
        >
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
