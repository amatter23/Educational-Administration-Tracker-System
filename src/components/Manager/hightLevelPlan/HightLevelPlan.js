import React, { useState } from 'react';
import classes from './HightLevelPlan.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faSquareCheck,
  faSquare,
  faSquareXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Select from 'react-select';
const HightLevelPlan = props => {
  const { t } = useTranslation();
  //  get user date
  const [userData, setUserData] = useState(props.userData);
  // popup control
  const [open, setOpen] = useState(false);
  // todo add style to popup
  const contentStyle = {
    width: '90%',
  };

  // add a checked class ti div item when click and remove it from another
  const [activeItemIndex, setActiveItemIndex] = useState('done');

  const [options, setOptions] = useState([
    { value: 'administration_admin', label: t('administration_admin') },
    { value: 'cooperative_admin', label: t('cooperative_admin') },
    { value: 'decentralization_admin', label: t('decentralization_admin') },
    {
      value: 'environment_population_admin',
      label: t('environment_population_admin'),
    },
    { value: 'laboratories_admin', label: t('laboratories_admin') },
    { value: 'nutrition_admin', label: t('nutrition_admin') },
    { value: 'production_unit_admin', label: t('production_unit_admin') },
    { value: 'quality_admin', label: t('quality_admin') },
    { value: 'security_safety_admin', label: t('security_safety_admin') },
    { value: 'strategic_planning_admin', label: t('strategic_planning_admin') },
    { value: 'students_affairs_admin', label: t('students_affairs_admin') },
    { value: 'teachers_admin', label: t('teachers_admin') },
    { value: 'tracker', label: t('tracker') },
    { value: 'training_admin', label: t('training_admin') },
    { value: 'workers_affairs_admin', label: t('workers_affairs_admin') },
  ]);
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
                activeItemIndex === 'open' ? classes.checked : ''
              }`}
              onClick={() => setActiveItemIndex('open')}
            >
              <FontAwesomeIcon
                className={classes.fillterIcon}
                icon={faSquareCheck}
              />
            </div>
            <div
              className={`${classes.item} ${
                activeItemIndex === 'done' ? classes.checked : ''
              }`}
              onClick={() => setActiveItemIndex('done')}
            >
              <FontAwesomeIcon
                className={classes.fillterIcon}
                icon={faSquareXmark}
              />
            </div>
          </div>
          <div className={classes.addNewObjectiv}>
            <Popup
              trigger={
                <button className='btn'>
                  {t(`add`)} {t(`objective`)}
                </button>
              }
              position='center'
              modal
            >
              <div className={classes.addObjectiv}>
                <h4>{t('Add new objectiv')}</h4>
                <Select options={options} />
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
            <div className={`${classes.tableHeaderItem}  `}>
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
              {t(`Follow-up responsible
`)}
            </div>
          </div>
          <div className={classes.tableBody}>
            {/* {schools.map(school => {
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
                    {t(`${school.school_level}`)}
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
            })} */}
            <div
              onClick={() => {
                setOpen(() => true);
              }}
              className={classes.tableRow}
            >
              <div className={`${classes.tableBodyItem} `}>Objectiv</div>
              <div className={`${classes.tableBodyItem}  `}>name</div>
              <div className={`${classes.tableBodyItem} ${classes.clear} `}>
                time
              </div>
              <div
                className={`${classes.tableBodyItem} ${classes.schoolName} ${classes.clear} `}
              >
                name
              </div>
              <Popup
                open={open}
                closeOnDocumentClick
                onClose={() => {
                  setOpen(() => false);
                }}
                modal
              >
                <div className={classes.popUp}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni omnis delectus nemo, maxime molestiae dolorem
                  numquam mollitia, voluptate ea, accusamus excepturi deleniti
                  ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </div>
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HightLevelPlan;
