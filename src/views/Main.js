// @flow

import * as React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components';
// import { inject } from 'mobx-react';

type Props = {};

const Container = styled.div`
  border: 1px solid red;
`;

class Main extends React.Component<Props> {
  componentDidMount() {
    this.fetchDate();
  }

  fetchDate = async () => {
    const { rootStore } = this.props;
    await rootStore.userStore.fetchUsers();
  }

  render() {
    const { rootStore } = this.props;

    return (
      <div className="App">
        <Container>{rootStore.userStore.users[0].fullName}</Container>
      </div>
    );
  }
}

export default inject('rootStore')(Main);
