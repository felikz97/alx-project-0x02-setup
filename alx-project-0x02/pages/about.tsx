// pages/about.tsx

import Head from 'next/head'
import Header from '@/components/layout/Header'
import Button from '@/components/common/Button'

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-6 space-y-6 text-center">
        <h1 className="text-3xl font-bold">About This Project</h1>

        <div className="space-x-4">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  )
}

export default About
