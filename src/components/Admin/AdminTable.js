import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './AdminTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilter,
  faList,
  faPlus,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { getUsers, addUser, getRoles } from '../../utils/getData';
import Loader from '../../pages/Loader';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const AdminTable = props => {
  // todo create a filter component
  // todo create a search component
  // todo create a pagination component
  // todo create a delete and edit component for each row
  // implement the translation variable
  const { t } = useTranslation();
  // users data
  const [users, setUsers] = useState([]);
  // loading state to load the data
  const [isLoading, setLoading] = useState(true);

  // check if there is an error
  const [error, setError] = useState(false);

  // error message state when adding a user
  const [errorMassage, setErrorMassage] = useState('');

  // roles data
  const [options, setOptions] = useState([
    { value: 'system_admin', label: t('system_admin') },
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
    { value: 'vice', label: t('vice') },
    { value: 'workers_affairs_admin', label: t('workers_affairs_admin') },
    { value: 'manager', label: t('manager') },
  ]);
  // selected option
  const [selectedOption, setSelectedOption] = useState(null);
  // get data from api
  const fetchData = async () => {
    try {
      const response = await getUsers().then(data => {
        setLoading(false);
        if (data.status === 200) {
          setUsers(data.result);
          return;
        } else {
          setError(true);
          return;
        }
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // fetch data
  useEffect(() => {
    fetchData();
  }, []);
  // state to toggle the loader when adding a user
  const [addUserLoading, setAddUserLoading] = useState();

  //add user handler to api
  const addUserHandler = async event => {
    event.preventDefault();
    setAddUserLoading(true);
    if (
      selectedOption === null ||
      event.target.email.value === undefined ||
      event.target.password.value === undefined ||
      event.target.userName.value === undefined ||
      event.target.firstName.value === undefined ||
      event.target.lastName.value === undefined
    ) {
      toast.error(t('Please fill all the fields'));
      setAddUserLoading(false);
      return;
    }
    try {
      const response = await addUser(
        event.target.email.value,
        event.target.password.value,
        selectedOption.value,
        event.target.userName.value,
        event.target.firstName.value,
        event.target.lastName.value
      ).then(data => {
        if (data === true) {
          toast.success(t('Add user success'));
          setErrorMassage('');
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          return;
        }
        const keys = Object.keys(data);
        console.log(data[keys[0]][0]);
        setErrorMassage(data[keys[0]][0]);
      });

      setAddUserLoading(false);
    } catch (error) {
      console.log(error);
      setAddUserLoading(false);
      return;
    }
  };

  // state to toggle the add user screen
  const [addUserToggle, UpdateaddUserToggle] = useState(false);

  // is loading
  if (isLoading) {
    return <Loader />;
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
      <ToastContainer />
      <div className={classes.header}>
        <div className={classes.search}>
          <div className={classes.inputSearch}>
            <input type='text' placeholder='Search' />
          </div>
          <div className={classes.filter}>
            {/*  todo: create a filter component */}
            <button>
              <FontAwesomeIcon icon={faList} /> Filters
            </button>
          </div>
        </div>
        {/* btn to phone screen and all screens */}
        <div className={`${classes.add} ${classes.all}`}>
          <button
            onClick={() => {
              UpdateaddUserToggle(true);
            }}
            className='btn'
          >
            {' '}
            <FontAwesomeIcon icon={faPlus} /> Add new user
          </button>
        </div>
        <div className={`${classes.add} ${classes.phone}`}>
          <button
            onClick={() => {
              UpdateaddUserToggle(true);
            }}
            className='btn'
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className={classes.body}>
        <div className={classes.table}>
          <div className={`${classes.tableHeader} ${classes.row} `}>
            <div className={classes.cell}>Name</div>
            <div className={classes.cell}>Email</div>
            <div className={classes.cell}>User Name</div>
            <div className={classes.cell}>Role</div>
          </div>
          {users.map(user => {
            return (
              <div className={classes.row}>
                <div
                  title={user.first_name + ' ' + user.last_name}
                  className={classes.cell}
                >
                  {user.first_name + ' ' + user.last_name}
                </div>
                <div title={user.email} className={classes.cell}>
                  {user.email}
                </div>
                <div title={user.username} className={classes.cell}>
                  {user.username}
                </div>
                <div title={user.role} className={classes.cell}>
                  {user.role}
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
      {/* add user screen */}
      {addUserToggle && (
        <div className={classes.addUser}>
          <form onSubmit={addUserHandler}>
            <div className={classes.addUserContainer}>
              <div className={classes.addUserHeader}>
                <h4>Add new user</h4>
                <h6>New user</h6>
              </div>
              <div className={classes.addUserBody}>
                <div style={{ width: '100%' }} className='input-label'>
                  <label htmlFor='name'>First Name</label>
                  <input type='text' id='firstName' />
                </div>
                <div style={{ width: '100%' }} className='input-label'>
                  <label htmlFor='name'>Last Name</label>
                  <input type='text' id='lastName' />
                </div>
                <div style={{ width: '100%' }} className='input-label'>
                  <label htmlFor='role'>Role</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    className={classes.select}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused
                          ? 'none'
                          : 'var(--border-color)',
                      }),
                    }}
                  />
                </div>
                <div style={{ width: '100%' }} className='input-label'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' id='email' />
                </div>
                <div style={{ width: '100%' }} className='input-label'>
                  <label htmlFor='userName'>User Name</label>
                  <input type='text' id='userName' />
                </div>

                <div style={{ width: '100%' }} className='input-label'>
                  <label htmlFor='password'>Password</label>
                  <input type='text' id='password' />
                </div>
                <div className={classes.errorMassage}>{errorMassage}</div>
              </div>
              <div className={classes.addUserFooter}>
                <button
                  className='btn-outline'
                  onClick={() => UpdateaddUserToggle(false)}
                >
                  Cancel
                </button>
                <button type='Submit' className='btn'>
                  Save
                </button>
              </div>
            </div>
            {addUserLoading && (
              <div className={classes.loader}>
                {' '}
                <Loader backgroundColor={'transparent '} color={true} />
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
