// @flow

import * as React from 'react';
import { action, extendObservable, useStrict } from 'mobx';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import { User } from '../models';

type Props = {
  rootStore: Object,
};

const Container = styled.div`
  border: 1px solid red;
`;

useStrict(true);

class Main extends React.Component<Props> {
  constructor(props) {
    super(props);

    const observableState: {
      isFetching: boolean,
      user: {
        id: number,
        email: string,
      },
    } = {
      isFetching: false,
      user: User.create({
        id: 2,
        email: 'junkai@revenuemonster.my',
      }),
    };

    extendObservable(this, { observableState });
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = action(async () => {
    const { rootStore } = this.props;
    this.observableState.isFetching = true;
    await rootStore.userStore.fetchUsers(
      {},
      () => {
        this.observableState.isFetching = false;
      },
      () => {
        this.observableState.isFetching = false;
      },
    );
  });

  render() {
    const { rootStore } = this.props;
    const { isFetching } = this;

    return (
      <div className="App">
        {isFetching ? (
          <div> Loading </div>
        ) : (
          <Container>
            {rootStore.userStore.users.map(each => <li key={each.id}> {each.fullName} </li>)}
          </Container>
        )}
        <input
          value={this.user.firstName}
          onChange={e => this.user.setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <div> This is First Name: {this.user.firstName} </div>
        <input
          value={this.user.lastName}
          onChange={e => this.user.setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <div> This is Last Name: {this.user.lastName} </div>
        <div> This is Full Name: {this.user.fullName} </div>
      </div>
    );
  }
}

export default inject('rootStore')(observer(Main));
