// components/common/PostCard.tsx

import { PostProps } from '@/interfaces'

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-sm mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">User ID: {userId}</p>
      <p>{content}</p>
    </div>
  )
}

export default PostCard
