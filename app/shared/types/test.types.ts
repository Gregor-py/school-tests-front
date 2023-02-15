export interface ITest {
  _id: string
  owner: string
  class: number
  title: string
  description: string
  tags: []
  tasks: string[]
  createdAt: string
  updatedAt: string
  __v: number
}

export interface ITask {
  _id: string
  owner: string
  question: string
  answerVariants: any[]
  correctAnswer: any
  createdAt: string
  updatedAt: string
  __v: number
}