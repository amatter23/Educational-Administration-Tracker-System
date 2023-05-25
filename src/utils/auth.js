import { redirect } from 'react-router-dom';
import { api_url } from './getData';
export function getAuthToken() {
  return localStorage.getItem('token');
}

export function setAuthToken(token, refreshToken) {
  localStorage.setItem('token', token);
  localStorage.setItem('refreshToken', refreshToken);
}
// create a function to check if the token is expired by 24 hours
export function checkToken() {
  if (checkAuth()) {
    const time = new Date();
    const timeNow = time.getTime();
    const timeToken = localStorage.getItem('time');
    const timeDiff = timeNow - timeToken;
    const timeDiffHours = timeDiff / (1000 * 3600);
    if (timeDiffHours > 24) {
      localStorage.removeItem('time');
      localStorage.removeItem('token');
    } else {
      return false;
    }
  }
}

export function removeAuthToken() {
  localStorage.removeItem('token');
}
// create a function to check if the user is logged in

export function checkAuth() {
  if (localStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}

export function loginPageRedirect() {
  if (localStorage.getItem('token')) {
    return redirect('/');
  } else {
    return true;
  }
}

export function fetchlogin(userName, password) {
  return fetch(api_url + '/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
        setAuthToken(data.access, data.refresh);
        return true;
      });
    } else {
      return res.status;
    }
  });
}

export function refreshToken(refreshToken) {
  return fetch(api_url + '/auth/jwt/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh: refreshToken,
    }),
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
        setAuthToken(data.access, localStorage.getItem('refreshToken'));
        return {
          result: data,
          status: res.status,
        };
      });
    } else {
      return res.status;
    }
  });
}

export function logout() {
  removeAuthToken();
}
