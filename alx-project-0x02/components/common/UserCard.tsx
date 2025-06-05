// components/common/UserCard.tsx

import { UserProps } from '@/interfaces'

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded-md shadow mb-4 bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">
        Address: {address.street}, {address.city}
      </p>
    </div>
  )
}

export default UserCard
