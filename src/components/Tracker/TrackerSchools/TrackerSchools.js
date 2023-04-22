import React, { useState, useEffect } from 'react';
import classes from './TrackerSchools.module.css';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSchool,
  faCircleUser,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const TrackerSchools = () => {
  const navigate = useNavigate();
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
          <button onClick={()=>{
            navigate('/trackerForm')
          }} className='btn'>
            <FontAwesomeIcon icon={faPlus} /> Add New School
          </button>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.bodyItem}>
          <div className={classes.bodyItemHeader}>
            <div className={classes.level}>
              <h6>اعدادي</h6>
              <h6> : المرحله</h6>
            </div>
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div className={classes.bodyItemBody}>
            <div className={classes.creatorName}>
              احمد مطر
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={classes.schoolId}>
               202006730
            </div>
            <div className={classes.schoolName}>
              <h6>امين الراعي الثانويه</h6>
            </div>
          </div>
        </div>
        <div className={classes.bodyItem}>
          <div className={classes.bodyItemHeader}>
            <div className={classes.level}>
              <h6>اعدادي</h6>
              <h6> : المرحله</h6>
            </div>
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div className={classes.bodyItemBody}>
            <div className={classes.creatorName}>
              احمد مطر
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={classes.schoolId}>
               202006730
            </div>
            <div className={classes.schoolName}>
              <h6>امين الراعي الثانويه</h6>
            </div>
          </div>
        </div>
        <div className={classes.bodyItem}>
          <div className={classes.bodyItemHeader}>
            <div className={classes.level}>
              <h6>اعدادي</h6>
              <h6> : المرحله</h6>
            </div>
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div className={classes.bodyItemBody}>
            <div className={classes.creatorName}>
              احمد مطر
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={classes.schoolId}>
               202006730
            </div>
            <div className={classes.schoolName}>
              <h6>امين الراعي الثانويه</h6>
            </div>
          </div>
        </div>
        <div className={classes.bodyItem}>
          <div className={classes.bodyItemHeader}>
            <div className={classes.level}>
              <h6>اعدادي</h6>
              <h6> : المرحله</h6>
            </div>
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div className={classes.bodyItemBody}>
            <div className={classes.creatorName}>
              احمد مطر
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={classes.schoolId}>
               202006730
            </div>
            <div className={classes.schoolName}>
              <h6>امين الراعي الثانويه</h6>
            </div>
          </div>
        </div><div className={classes.bodyItem}>
          <div className={classes.bodyItemHeader}>
            <div className={classes.level}>
              <h6>اعدادي</h6>
              <h6> : المرحله</h6>
            </div>
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div className={classes.bodyItemBody}>
            <div className={classes.creatorName}>
              احمد مطر
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={classes.schoolId}>
               202006730
            </div>
            <div className={classes.schoolName}>
              <h6>امين الراعي الثانويه</h6>
            </div>
          </div>
        </div>
        <div className={classes.bodyItem}>
          <div className={classes.bodyItemHeader}>
            <div className={classes.level}>
              <h6>اعدادي</h6>
              <h6> : المرحله</h6>
            </div>
            <FontAwesomeIcon icon={faSchool} />
          </div>
          <div className={classes.bodyItemBody}>
            <div className={classes.creatorName}>
              احمد مطر
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className={classes.schoolId}>
               202006730
            </div>
            <div className={classes.schoolName}>
              <h6>امين الراعي الثانويه</h6>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TrackerSchools;
