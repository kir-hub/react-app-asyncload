import config from './../config';
import queryString from 'query-string';
import _ from 'lodash'; 

const { 
    api: { 
      seed, 
      baseUrl, 
      user: { fields: userFields, allowedParams: getUserParams }, 
    },
  } = config; 
const getUsers = options => { 
    const defaultOptions = { 
          page: 1,
          seed, 
          results: 20, 
          inc: userFields, 
        }; 
const finalOptions = { ...defaultOptions, ..._.pick(options, getUserParams), }; 

const queryParamsStr = queryString.stringify(finalOptions, { arrayFormat: 'comma', }); 
return fetch(`${baseUrl}?${queryParamsStr}`)
    .then(res => res.json());}; 
        
export default getUsers
