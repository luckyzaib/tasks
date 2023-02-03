import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Button } from 'antd'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Link href='/firstTask'>
      <Button>Entries API</Button>
    </Link>
    <Link href='/secondTask'>
      <Button>Universities API</Button>
    </Link>
    <Component {...pageProps} />
  </>
  )
}
