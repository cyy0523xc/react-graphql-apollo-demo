import React from 'react';
import { graphql } from 'react-apollo';

import { Button  } from 'antd';

import GET_TASKS_QUERY from './graphql/GetTasksQuery'
import DEL_TASK_MUTATION from './graphql/DelTaskMutation'

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
        <Button type="primary" onClick={onClick}> 删除 </Button>
    )
}

// You can also use `graphql` for GraphQL mutations
export default graphql(DEL_TASK_MUTATION, {
    options: (props) => ({
        refetchQueries: [ 
            {
                query: GET_TASKS_QUERY,
                variables: {
                    status: 'todo'
                }
            }
        ]
    })
})(DelTask);
