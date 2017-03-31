import React, { Component } from 'react';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import TaskList from './TaskList';
import CONFIG from "./config"

class App extends Component {
    constructor(...args) {
        super(...args);

        const networkInterface = createNetworkInterface({uri: CONFIG.uri});
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
