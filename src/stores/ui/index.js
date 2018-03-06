// @flow

import { types } from 'mobx-state-tree';

import type { Types } from './types';

export const store = types
  .model('uiStore', {
    hello: types.string,
  })
  .views(self => ({
    get getHello() {
      return self.hello;
    },
  }))
  .actions(self => ({
    test() {
      console.log(self);
    },
  }));

const test: Types = store.create({ hello: 'asdasd' });
console.log(test);

export default store;
