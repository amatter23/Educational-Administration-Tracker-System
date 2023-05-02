import React, { useState, useEffect } from 'react';
import classes from './SchoolsTable.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSchool,
  faCircleExclamation,
  faShield,
} from '@fortawesome/free-solid-svg-icons';
import { getSchools } from '../../../../../utils/getData';
import Loader from '../../../../../pages/Loader';
const SchoolsTable = props => {
  // state to handle the loading
  const [isLoading, setLoading] = useState(false);
  // state to handle the error
  const [error, setError] = useState(false);
  // state to handle the user data
  const [userData, UpdateUserData] = useState(props.userData);
  // state to store the user role name get from userDate and remove the _admin from it
  const roleNames = userData.role.replace('_admin', '').replace('-', '_');
  // state to handle the schools data
  const [schools, setSchools] = useState([]);

  // function to fetch the schools data from the server
  const fetchSchoolsData = async () => {
    setLoading(true);
    try {
      const response = getSchools(userData.role).then(data => {
        setLoading(false);
        if (data.status === 200) {
          setSchools(data.result.results);
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

  // useEffect to fetch the data from the server
  useEffect(() => {
    fetchSchoolsData();
  }, []);

  // function to handle the navigation to the school data page
  const navigate = useNavigate();
  // function to handle the navigation to the school data page
  const openTaskWindow = event => {
    event.preventDefault();
    navigate('/formData', {
      state: { formDataId: event.currentTarget.id },
    });
  };

  // if the loading is true show the loader
  if (isLoading === true) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    );
  }
  // if the error is true show the error message
  else if (error === true) {
    return (
      <div className='loader'>
        <FontAwesomeIcon icon={faCircleExclamation} size='2xl' />
        <span>Can't retch it now</span>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.title}>
          <FontAwesomeIcon icon={faSchool} />
          <h3>المدارس</h3>
        </div>
        <div className={classes.search}>
          <input type='text' placeholder='بحث' />
        </div>
      </div>
      <div className={classes.table}>
        <div className={classes.content}>
          <div className={classes.tableHeader}>
            <div
              className={`${classes.tableHeaderItem} ${classes.schoolName} `}
            >
              اسم المدرسه
            </div>
            <div className={`${classes.tableHeaderItem} ${classes.clear} `}>
              {' '}
              الرقم التعريفي
            </div>
            <div className={`${classes.tableHeaderItem} ${classes.clear} `}>
              المرحله
            </div>
            <div
              className={`${classes.tableHeaderItem} ${classes.schoolName} `}
            ></div>
          </div>
          <div className={classes.tableBody}>
            {schools.map(school => {
              return (
                <div
                  key={school.id}
                  id={school.id}
                  onClick={openTaskWindow}
                  className={classes.tableRow}
                >
                  <div
                    className={`${classes.tableBodyItem} ${classes.schoolName} `}
                  >
                    {school.school_name}
                  </div>
                  <div className={`${classes.tableBodyItem} ${classes.clear} `}>
                    {school.school_id}
                  </div>
                  <div className={`${classes.tableBodyItem} ${classes.clear} `}>
                    {school.school_level}
                  </div>
                  <div
                    className={`${classes.tableBodyItem} ${classes.schoolName} `}
                  >
                    {school[roleNames].issue !== null ? (
                      school[roleNames].response !== null ? (
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          color='green'
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faCircleExclamation}
                          color='red'
                        />
                      )
                    ) : (
                      <FontAwesomeIcon icon={faShield} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.pagination}>
          <button>Next</button>
          <button>pervious</button>
        </div>
      </div>
    </div>
  );
};

export default SchoolsTable;
