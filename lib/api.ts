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
    `
}
