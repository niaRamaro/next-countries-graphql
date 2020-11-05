import 'flag-icon-css/css/flag-icon.min.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Component {...pageProps} />
        </>
    )
}
export default MyApp
