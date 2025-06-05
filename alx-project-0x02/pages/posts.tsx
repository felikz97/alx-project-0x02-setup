// pages/posts.tsx

import Head from 'next/head'
import Header from '@/components/layout/Header'

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <p>Welcome to the posts page. Display posts here.</p>
      </main>
    </>
  )
}

export default Posts
