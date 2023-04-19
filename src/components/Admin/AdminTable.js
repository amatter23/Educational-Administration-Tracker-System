import React, { useState, useEffect } from 'react';

import classes from './AdminTable.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getUsers } from '../../utils/getData';
const AdminTable = props => {
  // users data
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  const fetchData = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  // todo create a filter component

  useEffect(() => {
    fetchData();
  }, []);
  // state to toggle the add user screen

  const [addUserToggle, UpdateaddUserToggle] = useState(false);

  return (
    <div className={classes.container}>
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
                <div className={classes.cell}>{user.name}</div>
                <div className={classes.cell}>{user.email}</div>
                <div className={classes.cell}>{user.userName}</div>
                <div className={classes.cell}>{user.role}</div>
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
              <button className='btn'>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
