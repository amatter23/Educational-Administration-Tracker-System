//component to show the data of department have only checkbox data 
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSchool,
  faBoxTissue,
  faFingerprint,
  faLayerGroup,
  faSquareCheck,
  faReply,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import classes from './UserCheckBoxData.module.css';
import { useLocation } from 'react-router-dom';
import { getSchools, addResponse } from '../../../utils/getData';
import Loader from '../../../pages/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import translate file
import { useTranslation } from 'react-i18next';

const UserCheckBoxData = props => {
  // get data id from the location state from the previous page
  const location = useLocation();
  const dataId = location.state.formDataId;
  // state to store the loading state
  const [isLoading, setLoading] = useState(true);
  // state to store the error state
  const [error, setError] = useState(false);
  // implement the translation variable
  const { t } = useTranslation();
  // state to store the user data
  const [userData, UpdateUserData] = useState(props.userData);
  // state to store the user role name get from userDate and remove the _admin from it
  const roleNames = userData.role.replace('_admin', '').replace('-', '_');
  //state to store data form date
  const [data, updateData] = useState({});
  // state to store the form information extracted from data state
  const [formInformation, UpdateFormInformation] = useState(() => {
    const { ...information } = data;
    delete information[roleNames];
    const updatedObj = Object.keys(information).reduce((acc, key) => {
      acc[key.replace('_', ' ')] = information[key];
      return acc;
    }, {});
    return updatedObj;
  });
  // state to store the form data extracted from data state
  const [formData, UpdateFormData] = useState();
  // state to store the form issue extracted from data state
  const [formIssue, UpdateFormIssue] = useState();
  // state to store the form response extracted from data state
  const [formResponse, UpdateFormIResponse] = useState();
  // state to store the data to return it as jsx element
  const [dataToShow, UpdateDataToShow] = useState();

   // function to get the object array from the form data
   function getObjectArray(obj) {
    const entries = Object.entries(obj);
    const flatEntries = entries.flatMap(([key, value]) => {
      if (typeof value === 'object') {
        const { id, ...valueWithOut } = value;
        const nestedEntries = getObjectArray(valueWithOut);
        return nestedEntries;
      } else {
        return { key, value };
      }
    });
    return flatEntries;
  }

  // function to get the data from the server
  const fetchSchoolData = async () => {
    setLoading(true);
    try {
      const response = getSchools(userData.role, dataId).then(data => {
        setLoading(false);
        if (data.status === 200) {
          updateData(data.result);
          UpdateFormInformation(() => {
            const { ...information } = data.result;
            delete information[roleNames];
            const updatedObj = Object.keys(information).reduce((acc, key) => {
              acc[key.replace('_', ' ')] = information[key];
              return acc;
            }, {});
            return updatedObj;
          });
          UpdateFormIssue(() => {
            const { issue } = data.result[roleNames];
            return { ...issue };
          });
          UpdateFormIResponse(() => {
            const { response } = data.result[roleNames];
            return { ...response };
          });
          UpdateFormData(() => {
            const { issue, id, response, ...admin } = data.result[roleNames];
            return { [roleNames]: admin };
          });

          const data1 = () => {
            const { response, issue, id, ...admin } = data.result[roleNames];
            return admin;
          };
          var data33 = data1();
          UpdateDataToShow(() => {
            const objectArray = getObjectArray(data33);
            return objectArray.map(({ key, value }) => {
              return (
                <div className={classes.row} key={key}>
                  <h5>{t(`${key}`)}</h5>:<h6>{value}</h6>
                </div>
              );
            });
          });
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

  // initial call to get the data from the server
  useEffect(() => {
    fetchSchoolData();
  }, []);
// function to handle the post response
  const handleResponse = async event => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = addResponse(
        dataId,
        {
          ...data,
          [roleNames]: {
            ...data[roleNames],
            response: {
              ...data[roleNames].response,
              response: event.target[0].value,
            },
          },
        },
        userData.role
      ).then(data => {
        console.log('test');

        if (data.status === 200) {
          setLoading(false);
          toast.success(`${t('Response added')}`, {});
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          setLoading(false);
          toast.error(t('Error to add a response'), {});
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
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
    <div className={classes.container}>
      <ToastContainer />
      <div className={classes.formInformation}>
        <div className={classes.data}>
          <div
            className={`${classes.school_name} ${classes.schoolInformation} `}
          >
            {/* call object key edit by remove _ and add space */}
            <h6>
              {' '}
              :{t(`${Object.entries(formInformation)[1][0]}`)}{' '}
              <span>
                <FontAwesomeIcon icon={faSchool} size='sm' />
              </span>{' '}
            </h6>
            {/* call object value  */}
            <h6>{formInformation['school name']}</h6>
          </div>
          <div className={`${classes.school_id} ${classes.schoolInformation} `}>
            {/* call object key edit by remove _ and add space */}
            <h6>
              {' '}
              :{t(`${Object.entries(formInformation)[3][0]}`)}{' '}
              <span>
                <FontAwesomeIcon icon={faFingerprint} size='sm' />
              </span>{' '}
            </h6>
            {/* call object value  */}
            <h6>{formInformation['school id']}</h6>
          </div>
          <div
            className={`${classes.school_level} ${classes.schoolInformation} `}
          >
            {/* call object key edit by remove _ and add space */}
            <h6>
              {' '}
              :{t(`${Object.entries(formInformation)[2][0]}`)}{' '}
              <span>
                <FontAwesomeIcon icon={faLayerGroup} size='sm' />
              </span>{' '}
            </h6>
            {/* call object value  */}
            <h6>{formInformation['school level']}</h6>
          </div>
        </div>
        <div className={classes.issue}>
          {formIssue.issue != null ? (
            <>
              <div className={classes.issueCheck}>
                <FontAwesomeIcon icon={faBoxTissue} />
                <h6>{t('Have issue')}</h6>
              </div>
              {formResponse.response != null ? (
                <div className={classes.issueCheck}>
                  <FontAwesomeIcon icon={faBoxTissue} />
                  <h6>{t('Answered')}</h6>
                </div>
              ) : (
                <div className={classes.issueCheck}>
                  <FontAwesomeIcon icon={faBoxTissue} />
                  <h6>{t('Not answered')}</h6>
                </div>
              )}
            </>
          ) : null}
        </div>
      </div>
      <div className={classes.content}>{dataToShow}</div>
      {formIssue.issue != null ? (
        <>
          <div className={classes.response}>
            <div className={classes.title}>
              <h5>{t('Issue')}</h5>
              <FontAwesomeIcon icon={faBoxTissue} />
            </div>
            <p>{formIssue.issue}</p>
          </div>
          {formResponse.response != null ? (
            <div className={classes.response}>
              <div className={classes.title}>
                <h5>{t('Response')}</h5>
                <FontAwesomeIcon icon={faReply} />
              </div>
              <p>{formResponse.response}</p>
            </div>
          ) : (
            <div className={classes.response}>
              <div className={classes.title}>
                <h5>{t('Please add response her')}</h5>
                <FontAwesomeIcon icon={faReply} />
              </div>
              <form onSubmit={handleResponse}>
                <textarea name='' id='' rows='4'></textarea>
                <button className='btn' type='submit'>
                  {t('Add response')}
                </button>
              </form>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};
export default UserCheckBoxData;
