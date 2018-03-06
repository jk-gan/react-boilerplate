// @flow

import http from '../utils/http';

type Query = {
  filter?: string | {},
  cursor?: string,
  sort?: string | Array<string>,
};

export default {
  login: (data: any = {}) => http.POST('/login', data),
  register: (data: any = {}) => http.POST('/register', data),
  fetchProfile: (data: Query) => http.GET('/profile', data),
};
