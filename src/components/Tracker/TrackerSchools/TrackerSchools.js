// todo : create the school details page and add the route to it
import React, { useState, useEffect } from 'react';
import classes from './TrackerSchools.module.css';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSchool,
  faCircleUser,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getTrackerSchools } from '../../../utils/getData';
import Loader from '../../../pages/Loader';
// import translate file
import { useTranslation } from 'react-i18next';
const TrackerSchools = () => {
  // implement the translation variable
  const { t } = useTranslation();
  const navigate = useNavigate();
  // state to store the loading state
  const [isLoading, setLoading] = useState(true);
  // state to store the error state
  const [error, setError] = useState(false);
  // state to store the user data
  const [userData, setUserData] = useState([]);
  //state to store the data
  const [data, updateData] = useState([]);

  // function to fetch the data
  const fetchSchoolData = async () => {
    setLoading(true);
    try {
      const response = getTrackerSchools().then(data => {
        setLoading(false);
        if (data.status === 200) {
          updateData(data.result.results);
          return;
        } else {
          setError(true);
          return;
        }
      });
    } catch (error) {
      setError('Something went wrong');
      return;
    }
  };

  // use effect to fetch the data
  useEffect(() => {
    fetchSchoolData();
  }, []);

  // is loading state to show the loader
  if (isLoading === true) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    );
  }
  // if error state to show the error message
  else if (error === true) {
    return (
      <div className='loader'>
        <FontAwesomeIcon icon={faCircleExclamation} size='2xl' />
        <span>Can't retch it now</span>
      </div>
    );
  }

  return (
    <div className={classes.contaner}>
      <div className={classes.header}>
        <div className={classes.headerItem}>
          <h4>
            {' '}
            <FontAwesomeIcon icon={faSchool} /> Schools
          </h4>
        </div>
        <div className={classes.headerItem}>
          <button
            onClick={() => {
              navigate('/trackerForm');
            }}
            className='btn'
          >
            <FontAwesomeIcon icon={faPlus} /> Add New School
          </button>
        </div>
      </div>
      <div className={classes.body}>
        {
          // map the data to show the schools
          data.map((item, index) => {
            return (
              <div className={classes.bodyItem}>
                <div className={classes.bodyItemHeader}>
                  <div className={classes.level}>
                    <h6>{t(`${item.school_level}`)}</h6>
                    <h6> : {t('Level')}</h6>
                  </div>
                  <FontAwesomeIcon icon={faSchool} />
                </div>
                <div className={classes.bodyItemBody}>
                  {/*  todo: create name creator from back end */}
                  {/* <div className={classes.creatorName}>
                    {item.creatorName}
                    <FontAwesomeIcon icon={faCircleUser} />
                  </div> */}
                  <div className={classes.schoolId}>{item.school_id}</div>
                  <div className={classes.schoolName}>
                    <h6>{item.school_name}</h6>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default TrackerSchools;
