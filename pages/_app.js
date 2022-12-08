import '../styles/globals.scss'
import '../styles/globals.scss'

import { Layout } from '../components';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';
import RefreshTokenHandler from '../components/refreshTokenHandler';

function MyApp({ Component, pageProps }) {
  const [interval, setInterval] = useState(0);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={interval}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <RefreshTokenHandler setInterval={setInterval} />
    </SessionProvider>
  )
}

export default MyApp;
