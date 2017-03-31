import React from 'react';
import { graphql } from 'react-apollo';

import { Button  } from 'antd';

import GET_TASKS_QUERY from '../../graphql/task/GetTasksQuery'
import DEL_TASK_MUTATION from '../../graphql/task/DelTaskMutation'

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
