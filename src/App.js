import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import TaskList from './TaskList';

class App extends Component {
  constructor(...args) {
    super(...args);

    const networkInterface = createNetworkInterface('http://localhost:8000/graphql-json');
    this.client = new ApolloClient({
      networkInterface,
      dataIdFromObject: r => r.id,
    });
  }
  render() {
    return (
      <ApolloProvider client={this.client}>
        <TaskList />
      </ApolloProvider>
    );
  }
}

export default App;
