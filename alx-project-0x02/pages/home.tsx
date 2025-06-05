// pages/home.tsx

import Head from 'next/head'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import Card from '@/components/common/Card'
import PostModal from '@/components/common/PostModal'


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>

        <Card
          title="Reusable Components"
          content="Click below to learn how we build dynamic components."
        />
        <button
          onClick={() => setModalOpen(true)}
          className="block mx-auto mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Open Post Modal
        </button>

        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Post Modal"
          content="This modal shows the details of a post. It's reusable and can be triggered dynamically."
        />
      </main>
    </>
  )
}

export default Home
