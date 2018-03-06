import { types } from 'mobx-state-tree';

const User = types.modal('User', {
  name: types.string,
});

export default User;
