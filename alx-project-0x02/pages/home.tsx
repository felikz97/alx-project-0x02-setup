// pages/home.tsx

import Head from 'next/head'
import Header from '../components/layout/Header'
import Card from '../components/common/Card'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>

        <Card
          title="Getting Started"
          content="This is a reusable Card component created for the ALX project."
        />

        <Card
          title="Features"
          content="Built with Next.js and TypeScript, this project follows modular and reusable component design."
        />

        <Card
          title="Continue Learning"
          content="Keep exploring React components, props, interfaces, and Next.js routing!"
        />
      </main>
    </>
  )
}

export default Home
