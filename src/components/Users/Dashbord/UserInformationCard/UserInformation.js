import React, { useState } from 'react';

import classes from './UserInformation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UserInformation = props => {
  const { t } = useTranslation();

  const [userData, setUserData] = useState(props.userData);
  // state to change the user role to a more readable format
  const userRoleHandler = userData.role
    .replace('_admin', '')
    .replace('_', '-')
    .replace('-', ' ');
  // state to store the navigate function
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h5>{userData.fallName}</h5>
        <h6>{t(userRoleHandler)}</h6>
        <div
          onClick={() => {
            navigate('/userInformation');
          }}
          className={classes.userIcon}
        >
          <FontAwesomeIcon icon={faUserPen} />
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
