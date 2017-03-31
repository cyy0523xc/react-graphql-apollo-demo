import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import TaskList from './components/task/TaskList';
import CONFIG from "./config"
import client from "./network/client"

class App extends Component {
    constructor(...args) {
        super(...args);
        this.client = client(CONFIG.uri)
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
