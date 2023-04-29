export const api_url = 'https://fms-jcfe.onrender.com';
export const auth =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMDc0NzEwLCJqdGkiOiI0YjNjOGZmOWE5N2Q0MGM0OTZiOWZmMjg5Y2EzNjY5YiIsInVzZXJfaWQiOjF9.MQ5STmZWIsEhjmOC6Ycb_QAJ2i8fXGACuvO2NCcA2io';

export function getUsers() {
  return fetch(api_url + '/auth/users/', {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

export function addUser(email, password, userName) {
  var resp;
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
  return fetch( api_url +'/auth/users/me/', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  }).then(res => {
    if (res.status === 200) {
      return res.json().then(data => {
        return res.status ;
      });
    } else {
      return res.status;
    }
  });
}

