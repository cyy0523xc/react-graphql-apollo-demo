import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ENTER_KEY_CODE = 13;

// A mutation is made available on a callback called `mutate`
// Other props of the wrapping component are passed through.
function AddTask({ mutate }) {
    const onCommit = (e) => {
        if (e.keyCode === ENTER_KEY_CODE) {
            mutate({ 
                variables: { taskContent: e.target.value }
            }).then(({data}) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <div>
            <input 
                placeholder="请输入任务内容" 
                onKeyDown={onCommit}
            />
        </div>
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
