import React from 'react';
import { graphql } from 'react-apollo';

import { Input } from 'antd';

import { getTasksQuery } from '../../graphql/task/GetTasksQuery'
import ADD_TASK_MUTATION from '../../graphql/task/AddTaskMutation'

const ENTER_KEY_CODE = 13;

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
    }

    return (
        <Input 
            placeholder="请输入任务内容" 
            onKeyDown={onCommit}
        />
    )
}

export default graphql(ADD_TASK_MUTATION, {
    options: () => ({
        // 刷新会产生网络请求
        /*refetchQueries: [ 
            {
                query: GET_TASKS_QUERY,
                variables: {
                    status: 'todo'
                }
            }
        ],*/

        // 减少一次网络请求
        update: (proxy, { data: { createTask } }) => {
            // readQuery从本地读取
            const queryData = proxy.readQuery(getTasksQuery('todo'));
            console.log(queryData.taskList);
            queryData.taskList.push(createTask);
            proxy.writeQuery(getTasksQuery('todo', queryData));
        },
    })
})(AddTask);
