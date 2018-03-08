import { flow, types } from 'mobx-state-tree';
import { User } from '../../models';

import http from '../../utils/http';

const UserStore = types
  .model('UserStore', {
    users: types.array(User),
  })
  .actions(self => ({
    fetchUsers: flow(function* fetchUsers(
      body = {},
      okCallback = () => {},
      errCallback = () => {},
    ) {
      try {
        const response = yield http.GET('users');
        self.users = response.map(each => User.create(each));
        okCallback();
      } catch (e) {
        console.error(e);
        errCallback();
      }
    }),
  }));

export default UserStore;
