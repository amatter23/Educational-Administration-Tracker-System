const api_url = 'https://fms-jcfe.onrender.com';
const auth =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMjkxNjg0LCJqdGkiOiJjYTdmYjdiYjBlOTI0MWRkYWI2YThjNGZjOTU4YjlmMyIsInVzZXJfaWQiOjF9.EzTv-RCRnpQ_ZwgW1J4MZCtspiQerIASxWDvwAHVK0M';

export function getUsers() {
  return fetch('https://fms-production.up.railway.app/auth/users/1/', {
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
