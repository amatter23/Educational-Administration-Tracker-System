import react, { useState } from 'react';
import classes from './Login.module.css';
import loginImg from '../../assits/iconfinder-icon.svg';
import Loader from '../../pages/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faUser,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

import { fetchlogin } from '../../utils/auth';
const Login = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const userNameHandler = e => {
    setUserName(e.target.value);
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  const login = async () => {
    setLoading(true);
    try {
      const response = fetchlogin(userName, password).then(data => {
        setLoading(false);
        if (data === 400) {
          setError('Please enter user name and password');
          setLoading(false);
        } else if (data === 401) {
          setError('Invalid user name or password');
        }
      });
    } catch (error) {
      setError('Something went wrong');
    }
  };
  return (
    <div className={classes.container}>
      {isLoading === true ? (
        <div className={classes.loader}>
          <Loader />
        </div>
      ) : null}

      <div className={classes.content}>
        <div className={classes.inputs}>
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
              />
            </div>
            <b style={{ color: '#b80000' }}>{error}</b>
          </div>

          <button onClick={login} className='btn'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
