import React from 'react';
import { graphql } from 'react-apollo';

import AddTask from './AddTask';
import DelTask from './DelTask';

import GET_TASKS_QUERY from './graphql/GetTasksQuery'

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready
function TaskList({ data: { loading, taskList } }) {
    if (loading) {
        return <div>Loading</div>;
    } else {
        return (
            <div>
                <div>
                    <AddTask />
                </div>

                <div>
                    <ul>
                        {taskList.map(({id, content}) => (
                            <li key={id}>
                                <span>{content}</span>

                                <span><DelTask taskId={id} /></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

console.log("in task list");
console.log(GET_TASKS_QUERY);

// 查询任务列表
export const withTasks = graphql(GET_TASKS_QUERY, {
    options: { 
        variables: {status: "todo"},
        fetchPolicy: 'cache-and-network',
        //pollInterval: 5000  // 定时刷新数据
    },
});

export default withTasks(TaskList);
