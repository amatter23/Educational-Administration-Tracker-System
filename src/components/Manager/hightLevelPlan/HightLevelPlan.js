import React, { useState, useEffect } from 'react';
import classes from './HightLevelPlan.module.css';
import Switch from 'react-js-switch';
import '@djthoms/pretty-checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faSquareCheck,
  faSquareXmark,
  faHandBackFist,
  faCircleInfo,
  faCircleXmark,
  faBullseye,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Select from 'react-select';
import { getDepartmentPlan, updateOpjective } from '../../../utils/getData';
const HightLevelPlan = props => {
  const { t } = useTranslation();
  //  get user date
  const [userData, setUserData] = useState(props.userData);
  // popup control
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, updateData] = useState([]);
  // todo add style to popup
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

  const [department, setDepartment] = useState('');
  const [done, setDone] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState('open');

  const getOpjective = async () => {
    try {
      setLoading(true);
      const response = getDepartmentPlan(department).then(data => {
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

  const updateOpjectives = async (id, approved, done) => {
    try {
      setLoading(true);
      const response = updateOpjective(id, approved, done).then(data => {
        setLoading(false);
        if (data.status === 200) {
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
  }, [department]);
  // add a checked class ti div item when click and remove it from another

  const [options, setOptions] = useState([
    { value: 'administration', label: t('administration_admin') },
    { value: 'cooperative', label: t('cooperative_admin') },
    { value: 'decentralization', label: t('decentralization_admin') },
    {
      value: 'environment_population',
      label: t('environment_population_admin'),
    },
    { value: 'laboratories', label: t('laboratories_admin') },
    { value: 'nutrition', label: t('nutrition_admin') },
    { value: 'production_unit', label: t('production_unit_admin') },
    { value: 'quality', label: t('quality_admin') },
    { value: 'security_safety', label: t('security_safety_admin') },
    { value: 'strategic_planning', label: t('strategic_planning_admin') },
    { value: 'students_affairs', label: t('students_affairs_admin') },
    { value: 'teachers', label: t('teachers_admin') },
    { value: 'tracker', label: t('tracker') },
    { value: 'training', label: t('training_admin') },
    { value: 'workers_affairs', label: t('workers_affairs_admin') },
  ]);
  const [checked, sitChecked] = useState(false);

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
          <div className={classes.addObjectiv}>
            <Select
              options={options}
              onChange={e => {
                setDepartment(e.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className={classes.table}>
        <div className={classes.content}>
          <div className={classes.tableHeader}>
            <div className={`${classes.tableHeaderItem}  `}>
              {t(`objective`)}{' '}
            </div>
            <div className={`${classes.tableHeaderItem} ${classes.clear} `}>
              {t(`Duration`)}
            </div>
            <div className={classes.tableHeaderItem}>{t('Done')}</div>
            <div className={classes.tableHeaderItem}>
              {t('Add to managment plan')}
            </div>
            <div></div>
          </div>
          {department !== '' ? (
            <div className={classes.tableBody}>
              <div
                className={`${classes.spiner} ${
                  loading === true ? classes.show : ''
                }`}
              >
                <FontAwesomeIcon icon={faSpinner} spin size='2xl' />
              </div>
              {data.filter(item => item).length === 0 ? (
                <div className={classes.noData}>
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    style={{ color: '#ff0000' }}
                  />
                  <h4>{t(`No objectives`)}</h4>
                </div>
              ) : (
                data.map((opjectiv) => {
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
                        {opjectiv.execution_time}
                      </div>
                      <div className={classes.tableBodyItem}>
                        <div>
                          <Switch
                            color='#ffff'
                            backgroundColor={{
                              on: '#15b600',
                              off: '#d2d2d2',
                            }}
                            borderColor={{
                              on: '#15b600',
                              off: '#d2d2d2',
                            }}
                            initialValue={opjectiv.done}
                            onChange={e => {
                              updateOpjectives(
                                opjectiv.id,
                                opjectiv.approved,
                                e
                              );
                            }}
                          ></Switch>
                        </div>
                      </div>
                      <div className={classes.tableBodyItem}>
                        <div>
                          <Switch
                            color='#ffff'
                            backgroundColor={{
                              on: '#15b600',
                              off: '#d2d2d2',
                            }}
                            borderColor={{
                              on: '#15b600',
                              off: '#d2d2d2',
                            }}
                            initialValue={opjectiv.approved}
                            onChange={e => {
                              updateOpjectives(opjectiv.id, e, opjectiv.done);
                            }}
                          ></Switch>
                        </div>
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

                                      { activity.file === null ? (
                                        <h6>  
                                          {t(`no file attached to this activity`)}
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
          ) : (
            <div className={classes.checkDepartment}>
              <FontAwesomeIcon icon={faHandBackFist} />
              <h3>{t('please choose a department first')}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HightLevelPlan;
