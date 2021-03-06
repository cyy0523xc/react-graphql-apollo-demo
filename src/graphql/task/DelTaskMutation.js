// 获取任务列表
import gql from 'graphql-tag';

export default gql`
mutation delTask($taskId: Int!) {
  deleteTask(id: $taskId) {
    id
    content
    status
  }
}
`
