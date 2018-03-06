// @flow

import ResponseError from './error';

export default {
  isError(err: any): boolean {
    return err instanceof Error || err instanceof ResponseError;
  },
};
