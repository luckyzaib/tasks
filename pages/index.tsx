import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/firstTask')
  }, [])

  return (
    <>
      <Head>
        <title>Tasks</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </>
  )
}
