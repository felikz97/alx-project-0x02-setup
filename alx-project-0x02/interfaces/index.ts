// interfaces/index.ts

export interface ButtonProps {
  label: string
  size?: 'small' | 'medium' | 'large'
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  onClick?: () => void
}

// Already existing interfaces
export interface CardProps {
  title: string
  content: string
}

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
