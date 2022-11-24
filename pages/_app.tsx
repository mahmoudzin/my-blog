import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from './../components/layout/Layout';
import ContextProvider from '../context/contextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
