// @flow

import { types } from 'mobx-state-tree';

export type Type = {
  key: string,
  name: string,
  createdAt: string,
};

const model = types
  .model({
    key: types.string,
    name: types.string,
  })
  .actions({

  });

export default model;
