import { getAuthToken } from './auth';
import axios from 'axios';

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

// add user
export function addUser(email, password, role, userName, firstName, lastName) {
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
      role: role,
      first_name: firstName,
      last_name: lastName,
    }),
  }).then(response => {
    if (!response.ok) {
      const data = response.json();
      return data;
    }
    const data = response.json();
    return true;
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

// https://fms.fly.dev/security-safety/?ordering=-created_at/&page=2

// get school to each user
export function getSchools(userRole, formId, paginationUrl) {
  var api = api_url + '/' + userRole.replace('_admin', '').replace('_', '-');
  var url = api;
  if (formId !== null) {
    api =
      api_url +
      '/' +
      userRole.replace('_admin', '').replace('_', '-') +
      '/' +
      formId;
    url = api;
  } else if (paginationUrl !== undefined) {
    url = paginationUrl.replace('http', 'https');
  }
  return fetch(url, {
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
  return fetch(api_url + '/form-info/', {
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

// edit user data
export function editUserData(firstName, lastName, email, password) {
  return fetch(api_url + '/auth/users/me/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email: email,
      // // Password: MUST BE INCREMENTED DON'T ALLOW TO CHANGE
      // password: password,
    }),
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

//resetPassword
export function updatePassword(currentPassword, newPassword) {
  return fetch(api_url + '/auth/users/set_password/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
    body: JSON.stringify({
      new_password: newPassword,
      current_password: currentPassword,
    }),
  }).then(response => {
    if (!response.ok) {
      const data = response.json();
      return data;
    }
    const data = response.json();
    return true;
  });
}

//resetPassword
export function updateUserName(currentPassword, newUserName) {
  return fetch(api_url + '/auth/users/set_username/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: auth,
    },
    body: JSON.stringify({
      current_password: currentPassword,
      new_username: newUserName,
    }),
  }).then(response => {
    if (!response.ok) {
      const data = response.json();
      return data;
    }
    const data = response.json();
    return true;
  });
}

export function getDepartmentStatics(userRole) {
  var department =
    userRole.replace('_admin', '').replace('_', '-') + '-statics/';
  return fetch(api_url + '/' + department, {
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

// search about schools by name
export function searchSchoolsByName(userRole, value) {
  var api = userRole.replace('_admin', '').replace('_', '-');
  return fetch(api_url + '/' + api + '/?search=' + value, {
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

// filter out schools by level
export function filterSchoolsByLevel(userRole, value) {
  var api = userRole.replace('_admin', '').replace('_', '-');
  return fetch(api_url + '/' + api + '/?school_level=' + value, {
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

// get opjectives
export function getOpjectives() {
  return fetch(api_url + '/p/plan/', {
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

export function addNewObjectiveLowerLevel(objective) {
  return fetch(api_url + '/p/plan/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    body: JSON.stringify(objective),
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

export function getManagementPlan() {
  return fetch(api_url + '/p/manger-plan/', {
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

export function getDepartmentPlan(department) {
  return fetch(
    api_url +
      '/p/manger-plan/?department=' +
      department +
      '&ordering=-created_at/',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: auth,
      },
    }
  ).then(res => {
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

export function updateOpjective(id, approved, done) {
  return fetch(api_url + '/p/manger-plan/' + id + '/', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    method: 'PATCH',
    body: JSON.stringify({
      approved: approved,
      done: done,
      archived: false,
    }),
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
export function getMnagerStatics() {
  return fetch(api_url + '/m/manager-statics/', {
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

export function updateOpjectiveLowerLevel(id, opjective) {
  return fetch(api_url + '/p/plan/' + id + '/', {
    headers: {
      Authorization: auth,
    },
    method: 'PATCH',
    body: opjective,
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

// export function updateOpjectiveLowerLevel(id, opjective) {
//   return axios.put(api_url + '/p/plan/' + id + '/', {
//     activities: [
//       {
//         file: opjective,
//       },
//     ],
//   }, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: auth,
//     },
//   });
// }
