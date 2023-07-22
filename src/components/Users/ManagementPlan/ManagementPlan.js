import React, { useState, useEffect } from 'react';
import classes from './ManagementPlan.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faSquareCheck,
  faSquareXmark,
  faCircleXmark,
  faCircleInfo,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Loader from '../../../pages/Loader';
import { getManagementPlan } from '../../../utils/getData';
import { toast } from 'react-toastify';
import { act } from 'react-dom/test-utils';
const contentStyle = {
  height: '80%',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: 'var(--primary-darker)',
  border: 'none',
  borderRadius: 'var(--border-radius)',
  width: '80%',
};

const ManagementPlan = props => {
  const { t } = useTranslation();
  //  get user date
  const [userData, setUserData] = useState(props.userData);
  // popup control
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, updateData] = useState([]);
  const [activities, setActivities] = useState([
    {
      activity: '',
    },
  ]);
  const [newObjective, setNewObjective] = useState({
    objective: 'gfdsgdfsg',
    execution_time: 'test set',
    executed_by: 'test set',
    execution_tracker: 'test set',
    activities: activities,
    done: false,
  });
  const [countActivetes, setCountActivetes] = useState(1);
  const [done, setDone] = useState(false);
  const getObjective = async () => {
    try {
      setLoading(true);
      const data = await getManagementPlan();
      console.log(data);
      setLoading(false);

      if (data.status === 200) {
        const filteredData = data.result.filter(item => item.approved);

        filteredData.map(item => {
          console.log(item);
          updateData(prev => [...prev, item]);
        });
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getObjective();
  }, []);

  // add a checked class ti div item when click and remove it from another
  const [activeItemIndex, setActiveItemIndex] = useState('open');

  if (Loading) {
    return (
      <div className={classes.container}>
        <Loader />
      </div>
    );
  } else if (error) {
    return (
      <div className={classes.container}>
        <h1>error</h1>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <ToastContainer autoClose={1000} />
      <div className={classes.header}>
        <div className={classes.title}>
          <FontAwesomeIcon icon={faPlay} />{' '}
          <h3 className={classes.clear}>
            {t(`plan`)} {t(`${userData.role}`)}
          </h3>
        </div>
        <div className={classes.actions}>
          <div className={classes.fillter}>
            <div
              className={`${classes.item} ${
                activeItemIndex === 'done' ? classes.checked : ''
              }`}
              onClick={() => {
                setActiveItemIndex('done');
                setDone(true);
              }}
            >
              <FontAwesomeIcon
                className={classes.fillterIcon}
                icon={faSquareCheck}
              />
            </div>
            <div
              className={`${classes.item} ${
                activeItemIndex === 'open' ? classes.checked : ''
              }`}
              onClick={() => {
                setDone(false);
                setActiveItemIndex('open');
              }}
            >
              <FontAwesomeIcon
                className={classes.fillterIcon}
                icon={faSquareXmark}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.table}>
        <div className={classes.content}>
          <div className={classes.tableHeader}>
            <div
              className={`${classes.tableHeaderItem} ${classes.schoolName} `}
            >
              {t(`objective`)}{' '}
            </div>
            <div className={`${classes.tableHeaderItem} ${classes.clear}  `}>
              {t(`Executor`)}
            </div>
            <div
              className={`${classes.tableHeaderItem} ${classes.schoolName} ${classes.clear} `}
            >
              {t(`Duration`)}
            </div>
            <div
              className={`${classes.tableHeaderItem} ${classes.schoolName} ${classes.clear}`}
            >
              {t(`Follow-up responsible`)}
            </div>
            <div
              className={`${classes.tableHeaderItem} ${classes.schoolName} ${classes.clear}`}
            >
              {t(`Department`)}
            </div>
          </div>
          <div className={classes.tableBody}>
            {data.filter(item => item.done === done).length === 0 ? (
              <div className={classes.noData}>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  style={{ color: '#ff0000' }}
                />
                <h4>{t(`No objectives ${activeItemIndex}`)}</h4>
              </div>
            ) : (
              data
                .filter(status => status.done === done)
                .map((opjectiv, index) => {
                  return (
                    <div
                      key={opjectiv.id}
                      onClick={() => {
                        setOpen(() => true);
                      }}
                      className={classes.tableRow}
                    >
                      <div className={`${classes.tableBodyItem} `}>
                        {opjectiv.objective}
                      </div>
                      <div
                        className={`${classes.tableBodyItem} ${classes.clear}  `}
                      >
                        {opjectiv.executed_by}
                      </div>
                      <div
                        className={`${classes.tableBodyItem} ${classes.clear} `}
                      >
                        {opjectiv.execution_time}
                      </div>
                      <div
                        className={`${classes.tableBodyItem} ${classes.schoolName} ${classes.clear} `}
                      >
                        {opjectiv.execution_tracker}
                      </div>
                      <div
                        className={`${classes.tableBodyItem} ${classes.schoolName} ${classes.clear}`}
                      >
                        {t(`${opjectiv.department}`)}
                      </div>
                      <Popup
                        trigger={
                          <button
                            className={`${classes.schoolName} ${classes.detils}`}
                          >
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              style={{ color: '#ffffff' }}
                            />
                          </button>
                        }
                        position='center'
                        {...{
                          contentStyle,
                        }}
                        modal
                      >
                        <div className={classes.objectiveDetails}>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row-reverse',
                            }}
                          >
                            <div className={classes.titleIcon}>
                              <FontAwesomeIcon
                                className={classes.icon}
                                icon={faBullseye}
                                style={{ color: '#ffffff' }}
                              />
                              <h4> &nbsp;:{t(`objective`)} </h4>
                            </div>

                            <h5>{opjectiv.objective}</h5>
                          </div>

                          <div className={classes.objectiveDetailsItem}>
                            <h4> : {t(`Executor`)}</h4>
                            <p>{opjectiv.executed_by}</p>
                          </div>
                          <div className={classes.objectiveDetailsItem}>
                            <h4> : {t(`Duration`)}</h4>
                            <p>{opjectiv.execution_time}</p>
                          </div>
                          <div className={classes.objectiveDetailsItem}>
                            <h4> : {t(`Follow-up responsible`)}</h4>
                            <p>{opjectiv.execution_tracker}</p>
                          </div>
                          <div
                            style={{ flexDirection: 'column' }}
                            className={classes.objectiveDetailsItem}
                          >
                            <div className={classes.data}>
                              <h4> :{t(`Activities`)} </h4>
                              <ul className={classes.activities}>
                                {opjectiv.activities.map((activity, index1) => {
                                  return (
                                    <div className={classes.activityContaner}>
                                      <div className={classes.activity}>
                                        <h6>-{index1 + 1}</h6>
                                        <li key={index1}>
                                          {activity.activity}
                                        </li>
                                      </div>
                                      {activity.file === null ? (
                                        <h6>
                                          {t(
                                            `no file attached to this activity`
                                          )}
                                        </h6>
                                      ) : (
                                        <a
                                          href={activity.file}
                                          target='_blank'
                                          rel='noopener noreferrer'
                                        >
                                          {t(`download file`)}
                                        </a>
                                      )}
                                    </div>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </div>
                  );
                })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagementPlan;
