import React from 'react';
import { graphql } from 'react-apollo';

import { Input } from 'antd';

import GET_TASKS_QUERY from '../../graphql/task/GetTasksQuery'
import ADD_TASK_MUTATION from '../../graphql/task/AddTaskMutation'

const ENTER_KEY_CODE = 13;

function AddTask({ mutate }) {
    const onCommit = (e) => {
        console.log("aaa");
        if (e.keyCode === ENTER_KEY_CODE) {
            mutate({ 
                variables: { taskContent: e.target.value }
            }).then(({data}) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <Input 
            placeholder="请输入任务内容" 
            onKeyDown={onCommit}
        />
    )
}

console.log("in add task");
console.log(GET_TASKS_QUERY);

export default graphql(ADD_TASK_MUTATION, {
    options: () => ({
        refetchQueries: [ 
            {
                query: GET_TASKS_QUERY,
                variables: {
                    status: 'todo'
                }
            }
        ],
    })
})(AddTask);
