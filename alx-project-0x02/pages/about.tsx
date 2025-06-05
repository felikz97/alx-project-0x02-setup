// pages/about.tsx
import Header from '../components/layout/Header'
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center">About This Project</h1>
        <p className="mt-4 text-center text-gray-600">
          This project is part of the ALX Software Engineering program.
        </p>
      </main>
    </>
  )
}

export default About
