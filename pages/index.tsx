import Head from 'next/head'
import { GetStaticProps } from 'next'
import { request } from 'graphql-request'

import styles from '../styles/Home.module.scss'
import { API_URL, queries } from '../lib/api'

export default function Home({ countries }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Countries</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles['country-container']}>
                    {countries.map((country, index) => (
                        <div className={styles['country-item']} key={index}>
                            <div className={styles['country-image']}>
                                <span
                                    className={`flag-icon flag-icon-${country.code.toLowerCase()}`}
                                ></span>
                            </div>
                            <div className={styles['country-name']}>
                                {country.name}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const { countries } = await request(API_URL, queries.LIST_COUNTRIES)

        return {
            props: {
                countries: countries.sort((a, b) => (a.name < b.name ? -1 : 1))
            }
        }
    } catch (e) {
        return {
            props: {
                countries: []
            }
        }
    }
}
