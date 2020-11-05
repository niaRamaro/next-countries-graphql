import request from 'graphql-request'
import useSWR from 'swr'

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
    if (!data) return <div>loading...</div>

    const { country } = data
    document.title = country.name

    return (
        <div className="country">
            <ul>
                <li>
                    <span>Name : </span>
                    <span>
                        {country.name} ({country.native})
                    </span>
                </li>
                <li>
                    <span>Capital : </span>
                    <span>{country.capital}</span>
                </li>
                <li>
                    <span>Code : </span>
                    <span>{country.code}</span>
                </li>
                <li>
                    <span>Phone : </span>
                    <span>+{country.phone}</span>
                </li>
                <li>
                    <span>Currency : </span>
                    <span>{country.currency}</span>
                </li>
                <li>
                    <span>Languages : </span>
                    <span>
                        {country.languages
                            .map(({ name, native }) => `${name} (${native})`)
                            .join(', ')}
                    </span>
                </li>
                <li>
                    <span>States : </span>
                    <span>
                        {country.states.map(({ name }) => `${name}`).join(', ')}
                    </span>
                </li>
            </ul>
        </div>
    )
}
