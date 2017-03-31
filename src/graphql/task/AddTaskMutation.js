// 获取任务列表
import gql from 'graphql-tag';

export default gql`
mutation addTask($taskContent: String!) {
  createTask(content: $taskContent) {
    id
    content
    status
  }
}
`
