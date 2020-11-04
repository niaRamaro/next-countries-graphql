import { gql } from 'graphql-request'

export const API_URL = 'https://countries.trevorblades.com/'

export const queries = {
    LIST_COUNTRIES: gql`
        {
            countries {
                name
                code
            }
        }
    `,
    GET_COUNTRY: gql`
        query getCountry($code: ID!) {
            country(code: $code) {
                capital
                code
                currency
                name
                native
                phone
                continent {
                    code
                    name
                }
                languages {
                    code
                    name
                    native
                }
                states {
                    code
                    name
                }
            }
        }
    `
}
