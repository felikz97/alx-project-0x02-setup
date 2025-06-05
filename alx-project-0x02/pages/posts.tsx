// pages/posts.tsx

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          data.map((post: any) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
          }))
        )
      )
  }, [])

  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  )
}

export default Posts
