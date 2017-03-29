import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import AddTask from './AddTask';

//import GetTasksQuery from './graphql/GetTasksQuery.graphql'
import GetTasksQuery from './graphql/GetTasksQuery'
console.log(GetTasksQuery);

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready
function TaskList({ data: { loading, taskList } }) {
    if (loading) {
        return <div>Loading</div>;
    } else {
        return (
            <ul>
                {taskList.map(task => (
                    <li key={task.id}>
                        {task.content}

                        <AddTask taskContent={task.content} />
                    </li>
                ))}
            </ul>
        );
    }
}

/*
export default graphql(
    GetTasksQuery,
    {
        options: { 
            variables: { status: "todo"},
            //fetchPolicy: 'cache-and-network',
            //pollInterval: 5000  // 定时刷新数据
        },
    }
)(TaskList)*/

const GET_TASKS_QUERY = gql`
  query getTodos($status: TaskStatus!) {
    taskList(status: $status) {
      id
      content
      status
    }
  }
`

console.log(GET_TASKS_QUERY);

export default graphql(GET_TASKS_QUERY, {
    options: { 
        variables: { status: "todo"},
        fetchPolicy: 'cache-and-network',
        //pollInterval: 5000  // 定时刷新数据
    },
})(TaskList);
