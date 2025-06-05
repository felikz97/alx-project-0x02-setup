// pages/posts.tsx

import Head from 'next/head'
import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { PostProps } from '@/interfaces'

interface PostsPageProps {
  posts: PostProps[]
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const data = await res.json()

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }))

  return {
    props: {
      posts,
    },
  }
}

export default Posts
