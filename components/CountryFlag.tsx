import styles from '../styles/CountryFlag.module.scss'
import { BaseCountry } from '../types/Country'

export default function CountryFlag({ country }: { country: BaseCountry }) {
    return (
        <>
            <div className={styles['country-image']}>
                <span
                    className={`flag-icon flag-icon-${country.code.toLowerCase()}`}
                ></span>
            </div>
            <div className={styles['country-name']}>{country.name}</div>
        </>
    )
}
