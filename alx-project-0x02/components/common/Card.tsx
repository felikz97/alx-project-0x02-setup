// components/common/Card.tsx

import { type CardProps } from '@/interfaces'

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

export default Card
