// @flow

import { types } from 'mobx-state-tree';
import { User } from '../../models';

const UserStore = types
  .model('userStore', {
    users: types.array(User),
  })
  .actions(self => ({
    test() {
      console.log(self);
    },
  }));

export default UserStore;
