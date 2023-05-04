// TODO : ADD RESET PASSWORD AND RESET USERNAME FUNCTIONALITY
import React, { useState } from 'react';
import classes from './UserInformationView.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPen,
  faLock,
  faAt,
  faSignature,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  editUserData,
  updatePassword,
  updateUserName,
} from '../../utils/getData';
import Loader from '../Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
const UserInformationView = props => {
  // translation
  const { t } = useTranslation();
  // user data state object
  const [userData, UpdateUserData] = useState(props.userData);
  // state to store the first name
  const [first_name, setFirstName] = useState(userData.firstName);
  // state to store the last name
  const [last_name, setLastName] = useState(userData.lastName);
  // state to store the full name
  const [fullName, setFull] = useState(first_name + ' ' + last_name);
  // state to store the email
  const [email, setEmail] = useState(userData.email);
  // state to store the loading state
  const [isLoading, setLoading] = useState(false);
  // state to store the error state
  const [error, setError] = useState(true);
  // state to store the error message
  const [error_message, setError_message] = useState('');
  // state to open reset password window
  const [resetPassword, setResetPassword] = useState(false);
  // state to open reset username window
  const [resetUserName, setResetUserName] = useState(false);
  // state to store the new password
  const [newPassword, setNewPassword] = useState('');
  // state to store the current password
  const [currentPassword, setCurrentPassword] = useState('');
  // state to store the new username
  const [newUserName, setNewUserName] = useState('');
  // function to edit the user data
  // loading reset functions
  const [resetLoading, setResetLoading] = useState(false);
  // error reset
  const [resetError, setResetError] = useState(false);

  // function to edit the user data
  const handlereditUserData = async event => {
    event.preventDefault();
    setLoading(true);
    // check if the fields are empty
    if (first_name === '' || last_name === '' || email === '') {
      setError(true);
      setError_message('Please fill all the fields');
      setLoading(false);
      return;
    }
    try {
      const response = await editUserData(
        first_name,
        last_name,
        email
        // userData.password
      ).then(data => {
        setLoading(false);
        setError(false);
        if (data.status === 200) {
          setError(false);
          setFull(first_name + ' ' + last_name);
          toast.success('Updated successfully', {});
        } else {
          setError(true);
          setError_message('Something went wrong');
        }
      });
    } catch (error) {
      setLoading(false);
    }
  };

  //add user handler to api
  const handlerResetPassword = async event => {
    event.preventDefault();
    setResetLoading(true);
    if (newPassword === '' || currentPassword === '') {
      toast.error(t('Please fill all the fields'));
      setResetLoading(false);
      return;
    }
    try {
      console.log('Entered');
      const response = await updatePassword(currentPassword, newPassword).then(
        data => {
          if (data === true) {
            toast.success(t('Reset successfully'));
            setResetError('');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
            return;
          }
          const keys = Object.keys(data);
          console.log(data[keys[0]][0]);
          setResetError(data[keys[0]][0]);
        }
      );

      setResetLoading(false);
    } catch (error) {
      console.log(error);
      setResetLoading(false);
      return;
    }
  };

  const handlerResetUserName = async event => {
    event.preventDefault();
    setResetLoading(true);
    if (newUserName === '' || currentPassword === '') {
      toast.error(t('Please fill all the fields'));
      setResetLoading(false);
      return;
    }
    try {
      console.log('Entered');
      const response = await updateUserName(currentPassword, newUserName).then(
        data => {
          if (data === true) {
            toast.success(t('Reset successfully'));
            setResetError('');
            setTimeout(() => {
              window.location.reload();
            }, 2000);
            return;
          }
          const keys = Object.keys(data);
          console.log(data[keys[0]][0]);
          setResetError(data[keys[0]][0]);
        }
      );

      setResetLoading(false);
    } catch (error) {
      console.log(error);
      setResetLoading(false);
      return;
    }
  };

  return (
    <div className={classes.container}>
      <ToastContainer />
      <div className={classes.information}>
        {isLoading ? (
          <Loader color={true} backgroundColor={'transparent'} />
        ) : null}
        <div className={classes.background}>
          <div className={classes.userLogo}>
            {fullName.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className={classes.name}>
          <h6>@{userData.userName}</h6>
          <h3>{fullName}</h3>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              setResetPassword(true);
            }}
            className={classes.accBtn}
          >
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>
            Reset password
          </button>
          <button
            onClick={() => {
              setResetUserName(true);
            }}
            className={classes.accBtn}
          >
            <span>
              <FontAwesomeIcon icon={faAt} />
            </span>
            Reset UserName
          </button>
        </div>
      </div>

      <div className={classes.data}>
        <h5>Information</h5>
        <form onSubmit={handlereditUserData}>
          <div className={classes.formGroup}>
            <label htmlFor='first_name'>
              {' '}
              <span>
                <FontAwesomeIcon icon={faSignature} />
              </span>{' '}
              first Name
            </label>
            <input
              onChange={e => {
                setFirstName(e.target.value);
              }}
              defaultValue={first_name}
              type='text'
              name='first_name'
              id='first_name'
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='last_name'>
              {' '}
              <span>
                <FontAwesomeIcon icon={faSignature} />
              </span>{' '}
              Last Name
            </label>
            <input
              defaultValue={last_name}
              type='text'
              name='last_name'
              id='last_name'
              onChange={e => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='email'>
              {' '}
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>{' '}
              Email
            </label>
            <input
              onChange={e => {
                setEmail(e.target.value);
              }}
              defaultValue={email}
              type='email'
              name='email'
              id='email'
            />
          </div>
          <div
            style={{
              display: error ? 'block' : 'none',
            }}
            className={classes.error}
          >
            {error_message}
          </div>
          <button className={classes.accBtn}>Edit</button>
        </form>
      </div>

      {resetPassword ? (
        <form onSubmit={handlerResetPassword} className={classes.restPassword}>
          {resetLoading ? (
            <Loader backgroundColor={'transparent'} color={true} />
          ) : null}
          <h5>
            {' '}
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>{' '}
            Reset password
          </h5>
          <input
            onChange={e => {
              setNewPassword(e.target.value);
            }}
            placeholder='New Password'
            type='text'
            id='newPassword'
          />
          <input
            placeholder='Current password'
            type='text'
            id='currentPassword'
            onChange={e => {
              setCurrentPassword(e.target.value);
            }}
          />
          <div className={classes.error}>{resetError}</div>
          <div className={classes.actions}>
            <button type='submit' className={classes.accBtn}>
              Save
            </button>
            <button
              onClick={() => {
                setResetPassword(false);
              }}
              className={classes.accBtn}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}

      {resetUserName ? (
        <form onSubmit={handlerResetUserName} className={classes.restPassword}>
          {resetLoading ? (
            <Loader backgroundColor={'transparent'} color={true} />
          ) : null}
          <h5>
            {' '}
            <span>
              <FontAwesomeIcon icon={faAt} />
            </span>{' '}
            Reset user name
          </h5>
          <input
            placeholder='New user Name '
            type='text'
            id='newPassword'
            onChange={e => {
              setNewUserName(e.target.value);
            }}
          />
          <input
            placeholder='Current password'
            type='text'
            id='currentPassword'
            onChange={e => {
              setCurrentPassword(e.target.value);
            }}
          />
          <div className={classes.error}>{resetError}</div>
          <div className={classes.actions}>
            <button type='submit' className={classes.accBtn}>
              Save
            </button>
            <button
              onClick={() => {
                setResetUserName(false);
              }}
              className={classes.accBtn}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default UserInformationView;
