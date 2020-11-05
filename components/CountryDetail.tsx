import request from 'graphql-request'
import useSWR from 'swr'

import CenteredLoader from './CenteredLoader'
import Chip from './Chip'
import CountryFlag from './CountryFlag'
import MaterialIcon from './MaterialIcon'
import styles from '../styles/CountryDetail.module.scss'
import { API_URL, queries } from '../lib/api'

export default function CountryDetail({
    countryCode
}: {
    countryCode: string
}) {
    const { data, error } = useSWR(
        [queries.GET_COUNTRY, countryCode],
        (query, countryCode) => request(API_URL, query, { code: countryCode })
    )

    if (error) return <div>failed to load</div>
    if (!data) return <CenteredLoader />

    const { country } = data
    document.title = country.name

    return (
        <>
            <CountryFlag country={country} />

            <div className={styles['infos-container']}>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="check_circle_outline" />
                        </span>
                        Native :
                    </div>
                    <span>{country.native}</span>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="location_city" />
                        </span>
                        Capital :
                    </div>
                    <span>{country.capital}</span>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="fingerprint" />
                        </span>
                        Code :
                    </div>
                    <span>{country.code}</span>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="call" />
                        </span>
                        Phone :
                    </div>
                    <span>+{country.phone}</span>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="location_on" />
                        </span>
                        Continent :
                    </div>
                    <span>{country.continent.name}</span>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="attach_money" />
                        </span>
                        Currency :
                    </div>
                    <span>{country.currency}</span>
                </div>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="record_voice_over" />
                        </span>
                        Languages :
                    </div>
                </div>
                <div className={styles['info-list']}>
                    {country.languages.map(({ name }, index) => (
                        <Chip text={name} key={index} />
                    ))}
                </div>
                <div className={styles['info']}>
                    <div className={styles['info-label']}>
                        <span className={styles['label-icon']}>
                            <MaterialIcon icon="group_work" />
                        </span>
                        States :
                    </div>
                </div>
                <div className={styles['info-list']}>
                    {country.states.map(({ name }, index) => (
                        <Chip text={name} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}
