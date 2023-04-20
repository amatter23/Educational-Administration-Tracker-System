import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './AdminTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getUsers, addUser } from '../../utils/getData';
import Loader from '../../pages/Loader';
const AdminTable = props => {

  // todo create a filter component
  // todo handle the text overflow
  // users data
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  // get data from api
  const fetchData = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  
  // fetch data 
  useEffect(() => {
    fetchData();
  }, []);
  // state to toggle the loader when adding a user
  const [addUserLoading, setAddUserLoading] = useState();

  // add user handler to api
  // todo handle user information
  const addUserHandler = async event => {
    event.preventDefault();
    console.log(event.target.userName.value);
    setAddUserLoading(true);
    try {
      const response = await addUser(
        event.target.email.value,
        event.target.password.value,
        event.target.userName.value
      ).then(response => {
        setAddUserLoading(false);
        console.log(response);
        if (response.error === true) {
          toast.error('Try again later', {});
        } else {
          toast.success('success');
          setTimeout(function () {
            window.location.reload();
          }, 3000);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // state to toggle the add user screen
  const [addUserToggle, UpdateaddUserToggle] = useState(false);


  if (isLoading) {
    return <Loader />;
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
                <div className={classes.cell}>Ahmed Matter</div>
                <div className={classes.cell}>{user.email}</div>
                <div className={classes.cell}>{user.username}</div>
                <div className={classes.cell}>Manager</div>
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
                <div className='input-label'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' id='name' />
                </div>
                <div className='input-label'>
                  <label htmlFor='email'>Email</label>
                  <input type='text' id='email' />
                </div>
                <div className='input-label'>
                  <label htmlFor='userName'>User Name</label>
                  <input type='text' id='userName' />
                </div>
                <div className='input-label'>
                  <label htmlFor='role'>Role</label>
                  <input type='text' id='role' />
                </div>
                <div className='input-label'>
                  <label htmlFor='password'>Password</label>
                  <input type='text' id='password' />
                </div>
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
                <Loader />
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
