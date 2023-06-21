import react, { useState } from 'react';
import classes from './Login.module.css';
import loginImg from '../../assits/iconfinder-icon.svg';
import Loader from '../../pages/Loader';
import LoadingRing from '../../components/Ui/LoadingRing/LoadingRing';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faUser,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

import { fetchlogin } from '../../utils/auth';
const Login = () => {
  // state to store the user name
  const [userName, setUserName] = useState(null);
  // state to store the password
  const [password, setPassword] = useState(null);
  // state to store the error
  const [error, setError] = useState(null);
  // state to store the loading state
  const [isLoading, setLoading] = useState(false);
  // function to store the user name input
  const userNameHandler = e => {
    setUserName(e.target.value);
  };
  // function to store the password input
  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  // function to login
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = fetchlogin(userName, password).then(data => {
        setLoading(false);
        if (data === 400) {
          setError('Please enter user name and password');
          setLoading(false);
        } else if (data === 401) {
          setError('Invalid user name or password');
        } else {
          // refresh the site data
          window.location.reload();
        }
      });
    } catch (error) {
      setError('Something went wrong');
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <form onSubmit={login} className={classes.inputs}>
          <div className={classes.text}>
            <h3>
              <FontAwesomeIcon
                icon={faRightToBracket}
                shake
                size='xs'
                style={{ color: '#374e63' }}
              />
              Login
            </h3>
            <b>Hey, Enter your details to get sign in to your account</b>
          </div>
          <div className={classes.inputsCon}>
            <div className={classes.inputContanier}>
              <FontAwesomeIcon
                icon={faUser}
                size=''
                style={{ color: '#374e63' }}
              />
              <input
                onChange={userNameHandler}
                type='text'
                placeholder='Username'
                required
                autoFocus
              />
            </div>
            <div className={classes.inputContanier}>
              <FontAwesomeIcon
                icon={faLock}
                size=''
                style={{ color: '#374e63' }}
              />
              <input
                onChange={passwordHandler}
                type='Password'
                placeholder='Password'
                required
              />
            </div>
            <b style={{ color: '#b80000' }}>{error}</b>
          </div>
          {
            // if the loading state is true then show the loader
            <button type='submit' className='btn'>
              {isLoading ? <LoadingRing /> : 'Login'}
            </button>
          }
        </form>
      </div>
    </div>
  );
};

export default Login;
