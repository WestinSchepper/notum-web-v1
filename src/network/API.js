import rp from 'request-promise'
import humps from 'humps'

class API {
  constructor (options = {}) {
    const ROOT_PATH = 'http://localhost:3333'

    this.options = options
    this.uri = `${ROOT_PATH}${options.uri}` || `${ROOT_PATH}`
    this.body = options.body || {}
    this.json = true
  }

  GET () {
    return new Promise((resolve, reject) => {
      rp(this).then((data) => {
        resolve(humps.camelizeKeys(data))
      })
    })
  }

  POST () {
    return new Promise((resolve, reject) => {
      const params = {
        method: 'POST',
        ...this
      }

      rp(params).then((data) => {
        resolve(humps.camelizeKeys(data))
      })
    })
  }

  PUT () {
    return new Promise((resolve, reject) => {
      const params = {
        method: 'PUT',
        ...this
      }

      rp(params).then((data) => {
        resolve(humps.camelizeKeys(data))
      })
    })
  }

  DELETE () {
    return new Promise((resolve, reject) => {
      const params = {
        method: 'DELETE',
        ...this
      }

      rp(params).then((data) => {
        resolve(humps.camelizeKeys(data))
      })
    })
  }
}

export default API
