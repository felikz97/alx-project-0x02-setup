// pages/users.tsx

import Head from 'next/head'
import Header from '@/components/layout/Header'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'

interface UsersPageProps {
  users: UserProps[]
}

const Users = ({ users }: UsersPageProps) => {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">User Directory</h1>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </>
  )
}

//   This is the required getStaticProps function
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }))

  return {
    props: {
      users,
    },
  }
}

export default Users
