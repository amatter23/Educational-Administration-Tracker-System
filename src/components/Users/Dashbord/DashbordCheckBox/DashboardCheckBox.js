//todo add statics to the dashboard
import React, { useState } from 'react';
import classes from './DashboardCheckBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import RowBox from '../BoxStatistics/RowBox/RowBox';
import UserInformation from '../UserInformationCard/UserInformation';
import VerticalBarChart from '../VerticalBarChart/VerticalBarChart';
import PieChart from '../PieChart/PieChart';
import { getSchools } from '../../../../utils/getData';
const DashboardCheckBox = props => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.left}>
          <UserInformation userData={props.userData} />
        </div>
        <div className={classes.right}>
          <RowBox />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.left}>
          <VerticalBarChart />
        </div>
        <div className={classes.right}>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardCheckBox;
