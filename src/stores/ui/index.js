// @flow

import { types } from 'mobx-state-tree';

import type { Types } from './types';

export const store: Types = types
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

const test: Types = store.create({
  hello: 'asdasd',
});
console.log(test);

export default store;

this.props.$store.getStore('point');
this.props.rootStore.merchantStore.loyaltyStore.pointStore;
