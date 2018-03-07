// @flow

import { types } from 'mobx-state-tree';

import type { Types } from './types';

const UiStore: Types = types
  .model('UiStore', {
    isLoading: false,
  })
  .actions(self => ({
    show() {
      self.isLoading = true;
    },
    hide() {
      self.isLoading = false;
    },
  }));

export default UiStore;
