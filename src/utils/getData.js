import { getAuthToken } from './auth';

export const api_url = 'https://fms.fly.dev';
export const auth = 'Bearer ' + getAuthToken();

export function getUsers() {
  return fetch(api_url + '/auth/users/', {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
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

export function addUser(email, password, userName) {
  return fetch(api_url + '/auth/users/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
    body: JSON.stringify({
      email: email,
      password: password,
      username: userName,
      first_name: 'ahmed',
      last_name: 'mattar',
    }),
  }).then(res => {
    if (res.status === 201) {
      return res.json().then(data => {
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

export function addForm(form) {
  var resp;
  return fetch(api_url + '/evaluation-form/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
    body: JSON.stringify(form),
  })
    .then(response => {
      resp = response;
      return response.json();
    })
    .then(json => {
      return {
        response: resp,
        // errorMassage: [json.username, json.email, json.password],
        // userName: json.username,
        // email: json.email,
        // password: json.password,
        errorMassage: json,
        error: !resp.ok,
      };
    })
    .then(data => {
      return data;
    });
}

// get personal data
export function getPersonalData() {
  return fetch(api_url + '/auth/users/me/', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
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

// get school to each user
export function getSchools(userRole, formId) {
  var api = userRole.replace('_admin', '').replace('_', '-');
  if (formId !== undefined) {
    api = api + '/' + formId;
  }
  return fetch(api_url + '/' + api + '/', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
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

// add response to the form
export function addResponse(formId, response, userRole) {
  var api = userRole.replace('_admin', '').replace('_', '-');
  return fetch(api_url + '/' + api + '/' + formId + '/', {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
    body: JSON.stringify(response),
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
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

// get tracker school
export function getTrackerSchools() {
  return fetch(api_url + '/evaluation-form/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
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
