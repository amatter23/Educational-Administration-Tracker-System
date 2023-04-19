import React, { useState, useEffect } from 'react';
import classes from './UpperMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBraille,
  faCircleUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
const UpperMenu = props => {
  return (
    <div className={classes.menu}>
      <div className={classes.menuLogo}>
        <div className={classes.btn}>
          <FontAwesomeIcon icon={faBraille} className={classes.icon} />
        </div>
        <div>
          <FontAwesomeIcon icon={faCircleUser} className={classes.icon}/>
          <h6>Admin</h6>
        </div>
      </div>

      <div className={classes.logout}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className={classes.icon}/>
      </div>
    </div>
  );
};

export default UpperMenu;
