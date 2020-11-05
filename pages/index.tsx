import Head from 'next/head'
import { GetStaticProps } from 'next'
import { request } from 'graphql-request'
import { useState } from 'react'

import CountryDetail from '../components/CountryDetail'
import CountryList from '../components/CountryList'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.scss'
import { API_URL, queries } from '../lib/api'
import { BaseCountry } from '../types/Country'

export default function Home({ countries }: { countries: BaseCountry[] }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [selectedCountryIndex, setSelectedCountryIndex] = useState(null)

    const changeSelectedCountry = (index) => {
        if (index >= 0 && index < countries.length) {
            setSelectedCountryIndex(index)
            setIsSidebarOpen(true)
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Countries</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {isSidebarOpen && (
                    <Sidebar
                        position="right"
                        handleClose={() => setIsSidebarOpen(false)}
                    >
                        <div>
                            <button
                                onClick={() =>
                                    changeSelectedCountry(
                                        selectedCountryIndex - 1
                                    )
                                }
                                disabled={selectedCountryIndex === 0}
                            >
                                Previous
                            </button>
                            <button
                                onClick={() =>
                                    changeSelectedCountry(
                                        selectedCountryIndex + 1
                                    )
                                }
                                disabled={
                                    selectedCountryIndex ===
                                    countries.length - 1
                                }
                            >
                                Next
                            </button>
                        </div>

                        <CountryDetail
                            countryCode={countries[selectedCountryIndex].code}
                        ></CountryDetail>
                    </Sidebar>
                )}

                <CountryList
                    countries={countries}
                    onCountryClick={changeSelectedCountry}
                />
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
