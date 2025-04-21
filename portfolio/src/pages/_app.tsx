import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Roboto_Mono } from 'next/font/google';
import Head from 'next/head';

// Configurer les polices
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>• AXDS</title>
      </Head>
      <div className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}