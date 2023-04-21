const api_url = 'https://fms-jcfe.onrender.com';
const auth =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMjkxNjg0LCJqdGkiOiJjYTdmYjdiYjBlOTI0MWRkYWI2YThjNGZjOTU4YjlmMyIsInVzZXJfaWQiOjF9.EzTv-RCRnpQ_ZwgW1J4MZCtspiQerIASxWDvwAHVK0M';

export function getUsers() {
  return fetch(api_url + '/auth/users/', {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMzAxMzI4LCJqdGkiOiJkN2RiMTA3N2UxMGQ0ZGVlOGU0Mjk3NWEzMTFlNzFiYiIsInVzZXJfaWQiOjF9.zWUqFdvH_uPRpkdzFms5pKxWE2cl3mTzfhQ2gZLZ8Zs',
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
