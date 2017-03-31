// 获取任务列表
import gql from 'graphql-tag';

const GET_TASKS_QUERY = gql`
query getTasks($status: TaskStatus!) {
  taskList(status: $status) {
    id
    content
    status
  }
}`

export default GET_TASKS_QUERY;

// readQuery可以使用
export const getTasksQuery = (status, data) => {
    if (data === undefined) {
        // readQuery
        return {
            query: GET_TASKS_QUERY,
            variables: {
                status: status
            }
        }
    }

    // writeQuery
    return {
        query: GET_TASKS_QUERY,
        variables: {
            status: status
        },
        data
    }
}
