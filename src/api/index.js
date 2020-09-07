import { DATA_URL } from './../configs/api.js';
import queryString from 'query-string';

export const getUsers = ({
  inc = ['id', 'name', 'email', 'picture'],
  ...rest
} = {}) => {
  return fetch(
    `${DATA_URL}?${queryString.stringify(
      { inc, ...rest },
      { arrayFormat: 'comma' }
    )}`
  ).then((res) => res.json());
};
