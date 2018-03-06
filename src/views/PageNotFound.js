// @flow

import * as React from 'react';
// import { inject } from 'mobx-react';

type Props = {

};

class PageNotFound extends React.Component<Props> {
  componentWillMount() {
    console.log('Not found');
  }

  render() {
    return (
      <div className="App">PAGE NOT FOUND 404</div>
    );
  }
}

export default PageNotFound;
