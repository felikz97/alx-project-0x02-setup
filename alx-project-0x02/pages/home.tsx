// pages/home.tsx
import Header from '../components/layout/Header'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
      </main>
    </>
  )
}

export default Home
