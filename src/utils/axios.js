import axios from 'axios'

const sevrice = axios.create({
  baseURL: '/api',
  timeout: 5000
})

export default {
  ...sevrice,
  get (url, data = {}) {
    return sevrice.get(url, {
      params: data
    })
  }
}
