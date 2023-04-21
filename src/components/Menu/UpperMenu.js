import React, { useState, useEffect } from 'react';
import classes from './UpperMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBraille,
  faCircleUser,
  faArrowRightFromBracket,
  faTableColumns,
  faAlignJustify,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const UpperMenu = props => {
  const [userData, setuserData] = useState({
    role: 'tracker',
  });
  const [menuShow, setmenuShow] = useState(false);
  const menuItems = () => {
    if (userData.role === 'tracker') {
      return (
        <div className={classes.list}>
          <ul
            // style={{
            //   transform: menuShow ? 'translatex(-110%)' : 'translatex(3%)',
            // }}
            className={menuShow? classes.side: ""}
          >
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
          <h6>Admin</h6>
        </div>
        <div  >{menuItems()}</div>
      </div>

      <div className={classes.logout}>
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className={classes.icon}
        />
      </div>
    </div>
  );
};

export default UpperMenu;
