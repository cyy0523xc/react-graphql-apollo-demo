// 获取任务列表
import gql from 'graphql-tag';

export default gql`
query getTasks($status: TaskStatus!) {
  taskList(status: $status) {
    id
    content
    status
  }
}`
