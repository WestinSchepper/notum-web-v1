import { normalize } from 'normalizr'
import axios from 'axios'

import { BASE_URL } from '../../constants'

export function fetchResource ({ id, resource, schema }) {
  return () => axios.get(`${BASE_URL}/${resource}/${id}`)
    .then(response => {
      const serialized = normalize(response.data, schema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}
