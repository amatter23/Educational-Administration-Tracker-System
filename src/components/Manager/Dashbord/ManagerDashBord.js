import React, { useState, useEffect } from 'react';
import classes from './ManagerDashBord.module.css';
import UserInformation from '../../Ui/UserInformationCard/UserInformation';
import SchoolsQualified from '../../Users/Dashbord/QualityDashbord/SchoolsQualified/SchoolsQualified';
import { getMnagerStatics } from '../../../utils/getData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const ManagerDashBord = props => {
  // translate
  const { t } = useTranslation();
  // loading state
  const [loading, setLoading] = useState(true);
  // error state
  const [error, setError] = useState(false);
  // manager statics (data from api)
  const [managerStatics, setManagerStatics] = useState();
  // keys names of manager statics
  const [KeysName, setKeysName] = useState();
  // clicked card
  const [active, setActive] = useState(0);
  // fetch manager statics
  const fetchStatics = async () => {
    setLoading(true);
    try {
      const response = getMnagerStatics().then(data => {
        if (data.status === 200) {
          setLoading(false);
          setKeysName(Object.keys(data.result));
          console.log(Object.keys(data.result));
          console.log(data.result);
          setManagerStatics(data.result);
          console.log(data.result.schools_with_issues);
          return;
        } else {
          setLoading(false);
          setError(true);
          return;
        }
      });
    } catch (error) {}
  };
  // fetch manager statics on component mount
  useEffect(() => {
    fetchStatics();
  }, []);
  // if loading is true show loading icon
  if (loading === true) {
    return (
      <div>
        <FontAwesomeIcon size='2xl' spin icon={faSpinner} />
      </div>
    );
    // if error is true show error
  } else if (error === true) {
    return <div>error</div>;
  }
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.left}>
          <SchoolsQualified
            title={`${KeysName[active]}`}
            fields={managerStatics[KeysName[active]]}
          />
        </div>
        <div className={classes.right}>
          {/* //todo add a active style */}
          {KeysName.map((key, index) => (
            <div
              id={index}
              className={classes.card}
              onClick={() => {
                setActive(index);
              }}
            >
              <div className={classes.text}>
                <h5>{t(`${key}`)}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagerDashBord;
