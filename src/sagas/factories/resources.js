import { normalize } from 'normalizr'
import axios from 'axios'

import { BASE_URL } from '../../constants'

export function fetchResources ({ resource, schema }) {
  return () => axios.get(`${BASE_URL}/${resource}`)
    .then(response => {
      const serialized = normalize(response.data, schema)

      return {
        entities: serialized
      }
    })
    .catch(error => ({ error }))
}
