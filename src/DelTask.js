import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function DelTask({ mutate, taskId }) {
    const onClick = () => {
        mutate({ 
            variables: { taskId }
        }).then(({data}) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <button onClick={onClick}> 删除 </button>
    )
}

const DEL_TASK_MUTATION = gql`
  mutation delTask($taskId: Int!) {
    deleteTask(id: $taskId) {
      id
    }
  }
`

// You can also use `graphql` for GraphQL mutations
export default graphql(DEL_TASK_MUTATION, {
    options: (props) => ({
        //refetchQueries: [ ]
    })
})(DelTask);
