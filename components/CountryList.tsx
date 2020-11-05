import styles from '../styles/CountryList.module.scss'
import { BaseCountry } from '../types/Country'
import CountryFlag from './CountryFlag'

interface Props {
    countries: BaseCountry[]
    activeIndex: number
    onCountryClick(index: number): void
}

export default function CountryList({
    countries,
    onCountryClick,
    activeIndex
}: Props) {
    return (
        <div className={styles['country-container']}>
            {countries.map((country, index) => (
                <div
                    className={styles['country-item']}
                    key={index}
                    onClick={() => onCountryClick(index)}
                >
                    <CountryFlag
                        country={country}
                        isActive={index === activeIndex}
                    />
                </div>
            ))}
        </div>
    )
}
