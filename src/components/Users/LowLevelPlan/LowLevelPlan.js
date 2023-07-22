import React, { useState, useEffect, useRef } from 'react';
import classes from './LowLevelPlan.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faSquareCheck,
  faSquareXmark,
  faCircleXmark,
  faPen,
  faCircleInfo,
  faBullseye,
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Loader from '../../../pages/Loader';
import {
  getOpjectives,
  addNewObjectiveLowerLevel,
  updateOpjectiveLowerLevel,
} from '../../../utils/getData';
import { toast } from 'react-toastify';
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
  width: '90%',
};

const LowLevelPlan = props => {
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
      file: null,
    },
  ]);
  const [newObjective, setNewObjective] = useState({
    objective: '',
    execution_time: '',
    executed_by: '',
    execution_tracker: '',
    activities: activities,
    done: false,
  });
  const [done, setDone] = useState(false);
  const getOpjective = async () => {
    try {
      setLoading(true);
      const response = getOpjectives().then(data => {
        setLoading(false);
        if (data.status === 200) {
          updateData(data.result);
          return;
        } else {
          setError(true);
          return;
        }
      });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getOpjective();
  }, []);

  // add a checked class ti div item when click and remove it from another
  const [activeItemIndex, setActiveItemIndex] = useState('open');

  const addNewObjective = async e => {
    e.preventDefault();
    try {
      const id = toast.loading('Please wait...');
      const response = addNewObjectiveLowerLevel(newObjective).then(data => {
        console.log(data);
        if (data.status === 201) {
          const objective = data.result;
          setNewObjective(data.result);
          toast.update(id, {
            render: t(`Add successfully`),
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          });
          updateData(current => [objective, ...current]);
          return;
        } else {
          toast.update(id, {
            render: t(`Add failed`),
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
          return;
        }
      });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  const [file, setFile] = useState(null);

  const addFilesToActivity = (e, index, index1) => {
    setFile(e.target.files[0]);
  };
  // todo update objective not working
  const updateOpjective = async (activity, index, index1) => {
    const formData = new FormData();
    formData.append('activity_id', activity.id);
    formData.append('file', file);
    try {
      const id = toast.loading('Please wait...');
      const response = updateOpjectiveLowerLevel(formData).then(data => {
        if (data.status === 201) {
          toast.update(id, {
            render: t(`update successfully`),
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          });
          updateData(current => {
            const updatedData = [...current];
            updatedData[index].activities[index1] = {
              ...updatedData[index].activities[index1],
              file: data.result.file,
            };
            return updatedData;
          });
          return;
        } else {
          toast.update(id, {
            render: t(`update failed`),
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          });
          return;
        }
      });
    } catch (error) {
      // setError(true);
      // setLoading(false);
    }
  };
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
          <div className={classes.addNewObjectiv}>
            <Popup
              // todo create a delete button to each activity
              trigger={<button className='btn'>{t(`Add objective`)}</button>}
              position='center'
              modal
              {...{
                contentStyle,
              }}
            >
              <div className={classes.addObjectiv}>
                <h4>
                  {t('Add new objectiv')}
                  <FontAwesomeIcon icon={faPen} size='xs' />
                </h4>
                <form className={classes.addForm} onSubmit={addNewObjective}>
                  <div className='input-label'>
                    <label htmlFor='objectiveName'>{t(`objective`)} </label>
                    <input
                      required
                      type='text'
                      name='objectiveName'
                      id='objectiveName'
                      placeholder={t(`objective`)}
                      onChange={e => {
                        setNewObjective({
                          ...newObjective,
                          objective: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-label'>
                    <label htmlFor='Executor'>{t(`Executor`)} </label>
                    <input
                      required
                      type='text'
                      name='Executor'
                      id='Executor'
                      placeholder={t(`Executor`)}
                      onChange={e => {
                        setNewObjective({
                          ...newObjective,
                          executed_by: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-label'>
                    <label htmlFor='Duration'>{t(`Duration`)} </label>
                    <input
                      className={classes.date}
                      required
                      type='date'
                      name='Duration'
                      id='Duration'
                      placeholder={t(`Duration`)}
                      onChange={e => {
                        setNewObjective({
                          ...newObjective,
                          execution_time: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-label'>
                    <label htmlFor='Responsible'>
                      {t(`Follow-up responsible`)}{' '}
                    </label>
                    <input
                      type='text'
                      name='Responsible'
                      id='Responsible'
                      placeholder={t(`Follow-up responsible`)}
                      onChange={e => {
                        setNewObjective({
                          ...newObjective,
                          execution_tracker: e.target.value,
                        });
                      }}
                    />
                  </div>
                  {activities.map((activity, index) => {
                    return (
                      <div className='input-label' key={index}>
                        <label htmlFor='Activities'>{t(`Activities`)} </label>
                        <input
                          type='text'
                          name='Activities'
                          id='Activities'
                          placeholder={t(`Activities`)}
                          onChange={e => {
                            setActivities(prevActivities => {
                              const updatedActivities = [...prevActivities];
                              updatedActivities[index] = {
                                ...updatedActivities[index],
                                activity: e.target.value,
                              };
                              return updatedActivities;
                            });
                            setNewObjective({
                              ...newObjective,
                              activities: activities,
                            });
                          }}
                        />
                      </div>
                    );
                  })}
                  <button
                    style={{ width: '30%' }}
                    type='click'
                    className='btn'
                    onClick={e => {
                      e.preventDefault();
                      setActivities(current => [
                        ...current,
                        {
                          activity: '',
                          file: null,
                        },
                      ]);
                    }}
                  >
                    {t(`Add more Activities`)}
                  </button>
                  <button className='btn' type='submit'>
                    {t(`Add objective`)}
                  </button>
                </form>
              </div>
            </Popup>
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
                        className={`${classes.tableBodyItem} ${classes.clear} `}
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

                                      {opjectiv.done ? (
                                        <a
                                          href={activity.file}
                                          target='_blank'
                                          rel='noopener noreferrer'
                                        >
                                          {t(`download file`)}
                                        </a>
                                      ) : activity.file === null ? (
                                        <div>
                                          <input
                                            onChange={e => {
                                              addFilesToActivity(
                                                e,
                                                index,
                                                index1
                                              );
                                            }}
                                            type='file'
                                          />
                                          {opjectiv.done ? (
                                            ''
                                          ) : (
                                            <div
                                              className={
                                                classes.updateActivities
                                              }
                                            >
                                              <button
                                                onClick={() => {
                                                  updateOpjective(
                                                    activity,
                                                    index,
                                                    index1
                                                  );
                                                }}
                                                className='btn-outline'
                                              >
                                                {t('update activities')}
                                              </button>
                                            </div>
                                          )}
                                        </div>
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

export default LowLevelPlan;
