import React, { useState } from 'react';

import classes from './UserInformation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';

const UserInformation = props => {
  const [userData, setUserData] = useState(props.userData);
  // todo : add the edit user information functionality and page to user information card
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h5>{userData.fallName}</h5>
        <h6>{userData.role}</h6>
        <div onClick={''}>
          <FontAwesomeIcon icon={faUserPen} />
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
