//todo add statics to the dashboard
import React, { useState, useEffect } from 'react';
import classes from './StudentsAffairsDashbord.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import RowBox from '../../BoxStatistics/RowBox/RowBox';
import UserInformation from '../../UserInformationCard/UserInformation';
import PieChart from '../../PieChart/PieChart';
import { getDepartmentStatics } from '../../../../../utils/getData';
import Loader from '../../../../../pages/Loader';
import PieChartStudent from '../PieChartStudent/PieChartStudent';
const StudentsAffairsDashbord = props => {
  // state to handle the loading
  const [isLoading, setLoading] = useState(true);
  // state to handle the error
  const [error, setError] = useState(false);
  // state to handle the user data
  const [userData, setUserData] = useState(props.userData);
  // state to handle the schools data
  const [schoolStatics, setSchoolStatics] = useState();
  // state to handle the fields data
  const [fields, setFields] = useState();
  // function to fetch school statics
  const fetchStatics = async () => {
    setLoading(true);
    try {
      const response = getDepartmentStatics(userData.role).then(data => {
        setLoading(false);
        if (data.status === 200) {
          setSchoolStatics(data.result.system_info);
          setFields(data.result[`${userData.role.replace('_admin', '')}`]);
          return;
        } else {
          setError(true);
          return;
        }
      });
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    // getData(fields);
  };

  // useEffect to fetch the data from the server
  useEffect(() => {
    fetchStatics();
  }, []);

  if (isLoading === true) {
    return <Loader />;
  } else if (error === true) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.left}>
          <UserInformation userData={props.userData} />
        </div>
        <div className={classes.right}>
          <RowBox schoolStatics={schoolStatics} />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.right}>
          <PieChartStudent userData={userData} fields={fields} />
        </div>
        <div className={classes.right}>
          <PieChart userData={userData} schoolStatics={schoolStatics} />
        </div>
      </div>
    </div>
  );
};

export default StudentsAffairsDashbord;
