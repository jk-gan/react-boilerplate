import { types } from 'mobx-state-tree';

import UserStore from './user';

const RootStore = types.model('UserStore', {
  userStore: types.optional(UserStore, {
    users: [],
  }),
});

export default RootStore;
