import { types } from 'mobx-state-tree';

const User = types
  .model('User', {
    id: types.identifier(types.number),
    email: types.string,
    firstName: '',
    lastName: '',
  })
  .actions(self => ({
    setFirstName(newFirstName) {
      self.firstName = newFirstName;
    },
    setLastName(newLastName) {
      self.lastName = newLastName;
    },
  }))
  .views(self => ({
    get fullName() {
      return `${self.firstName} ${self.lastName}`;
    },
  }));

export default User;
