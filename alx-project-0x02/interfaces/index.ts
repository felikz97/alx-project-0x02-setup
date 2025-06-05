// interfaces/index.ts

export interface Post {
  id: number
  title: string
  content: string
  authorId: number
  createdAt: string
}

export interface User {
  id: number
  name: string
  email: string
  avatarUrl?: string
}
