import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function AddTask({ mutate, taskContent }) {
    const onClick = () => {
        mutate({ 
            variables: { taskContent }
        }).then(({data}) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <button onClick={onClick()}>
            AddTask
        </button>
    )
}

const ADD_TASK_MUTATION = gql`
  mutation addTask($taskContent: String!) {
    createTask(content: $taskContent) {
      id
    }
  }
`

// You can also use `graphql` for GraphQL mutations
export default graphql(ADD_TASK_MUTATION, {
    options: (props) => ({
        //refetchQueries: [ ]
    })
})(AddTask);
