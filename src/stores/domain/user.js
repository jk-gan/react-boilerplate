import { flow, types } from 'mobx-state-tree';
import { User } from '../../models';

import http from '../../utils/http';

const UserStore = types
  .model('UserStore', {
    users: types.array(User),
  })
  .actions(self => ({
    fetchUsers: flow(function* fetchUsers() {
      try {
        const response = yield http.GET('users');
        console.log('---------- response: ', response);
      } catch (e) {
        console.error(e);
      }
    }),
  }));

export default UserStore;
