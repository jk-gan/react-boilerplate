// @flow

import * as React from 'react';
import styled from 'styled-components';
// import { inject } from 'mobx-react';

type Props = {};

const Container = styled.div`
  border: 1px solid red;
`;

class Main extends React.Component<Props> {
  componentWillMount() {}

  render() {
    return (
      <div className="App">
        <Container>HELLO WORLD</Container>
      </div>
    );
  }
}

export default Main;
