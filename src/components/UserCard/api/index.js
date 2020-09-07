import config from './../config';
import queryString from 'query-string';

const {
  api: {
    seed,
    baseUrl,
    user: { fields: userFields, allowedParams: getUserParams },
  },
} = config;
const getUsers = async (options) => {
 // try{
    const data = config
    console.log(data)
  const defaultOptions = {
    page: 1,
    seed,
    results: 10,
    inc: userFields,
  };


  
  
  
// }catch(err){
//   console.log(err);
// }

  const queryParamString = queryString.stringify(defaultOptions, {
    arrayFormat: 'comma',
  });
  return fetch(`${baseUrl}?${queryParamString}`).then((result) =>
    result.json()
  );
};

export default getUsers;
