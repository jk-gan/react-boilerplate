// @flow

class ResponseError extends Error {
  name: string = '';

  constructor(message: string) {
    super(message);
    this.name = 'ResponseError';
  }
}

export default ResponseError;
