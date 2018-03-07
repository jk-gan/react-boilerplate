import { types } from 'mobx-state-tree';

import UiStore from './ui';
import UserStore from './domain/user';

const RootStore = types.model('RootStore', {
  uiStore: types.optional(UiStore, { isLoading: false }),
  userStore: types.optional(UserStore, { users: [] }),
});

export default RootStore;
