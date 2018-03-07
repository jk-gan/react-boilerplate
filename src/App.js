// @flow

import * as React from 'react';
import { inject, observer } from 'mobx-react';

type Props = {
  children: React.Node,
};

class App extends React.Component<Props> {
  componentWillMount() {
    console.log(this.props.children);
  }

  render() {
    return <div className="App">{this.props.children}</div>;
  }
}

export default inject('rootStore')(observer(App));
