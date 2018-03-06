
// import { authStore } from '../stores';
import config from '../config';
import ResponseError from './error';

const { API_ROOT_URL } = config;


// const API_ROOT_URL = `${DOMAIN_PROD}/api/v1`;
// https://www.soapui.org/testing-dojo/best-practices/understanding-rest-headers-and-parameters.html
const defaultHeaders = {
  Accept: 'application/json',
  'Accept-Charset': 'utf-8',
  'Content-type': 'application/json',
  'X-Rm-Platform': 'application/web/loyalty',
};

// https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html
function formatUri(uri) {
  if (new RegExp('^http|https').test(uri)) {
    return `${uri}`;
  }
  return `${API_ROOT_URL}${uri}`;
}

// Set timeout for Fetch
// http://imweb.io/topic/57c6ea35808fd2fb204eef63

// https://github.com/douglascrockford/JSON-js/blob/master/json2.js
const rxOne = /^[\],:{}\s]*$/;
const rxTwo = /\\(?:["\\/bfnrt]|u[0-9a-fA-F]{4})/g;
const rxThree = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?/g;
const rxFour = /(?:^|:|,)(?:\s*\[)+/g;
const isJSON = input => (
  input.length && rxOne.test(input.replace(rxTwo, '@')
    .replace(rxThree, ']')
    .replace(rxFour, ''))
);

const fetching = (uriInput = '', method = 'GET', body = {}) => {
  const uri = formatUri(uriInput);
  console.log('Fetch uri : ', uri);
  const jsonBody = JSON.stringify(body);
  const accessToken = '';
  const customHeaders = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Length': `${jsonBody.length}`,
  };
  const headers = Object.assign(defaultHeaders, customHeaders);
  const data = {
    method,
    headers,
    body: jsonBody,
    mode: 'cors',
    credentials: 'include',
  };
  if (method === 'GET') delete data.body;
  console.log('------- data: ', data);
  console.log('Fetch header : ', headers);
  console.log('Fetch body : ', body, jsonBody);
  const fetchAPI = fetch(uri, data)
    .then((resp) => {
      console.log(resp);
      if (!resp.ok) {
        return resp.text().then((text) => {
          console.log('Fetch pure response : ', text);
          const json = isJSON(text) ? JSON.parse(text) : {};
          console.log('debug here: ', json);
          return Promise.reject(new ResponseError(json.error));
        });
      }
      return resp.text().then((text) => {
        console.log(text);
        const json = isJSON(text) ? JSON.parse(text) : {};
        console.log(json);
        return Promise.resolve(json);
      });
    })
    .catch(err => Promise.reject(err));
  return Promise.race([
    fetchAPI,
    new Promise((resolve, reject) => {
      setTimeout(reject, 10000);
    }),
  ]);
};

const GET = (uri, body) => fetching(uri, 'GET', body);
const POST = (uri, body) => fetching(uri, 'POST', body);
const PATCH = (uri, body) => fetching(uri, 'PATCH', body);
const PUT = (uri, body) => fetching(uri, 'PUT', body);
const DELETE = (uri, body) => fetching(uri, 'DELETE', body);

export default {
  GET,
  POST,
  PATCH,
  PUT,
  DELETE,
};
