import axios from 'axios'
import Cookie from 'js-cookie'

const createInstance = (config) => {
  const instance = axios.create(Object.assign({}, {
    timeout: 10000,
    responseType: 'json',
    withCredentials: true,
    baseURL: process.env.VUE_APP_EX_API,
    headers: {
      'exchange-token': Cookie.get('token') || '',
      'exchange-language': Cookie.get('lang') || 'ar_SA'
    }
  }, config))

  instance.interceptors.response.use((response) => {
    const { data } = response
    if (data.code === '0') {
      return data
    } else {
      return Promise.reject(data)
    }
  }, error => {
    return Promise.reject(error)
  })

  return instance
}

const request = createInstance()

export const post = (url, data = {}) => {
  return request({
    url,
    method: 'post',
    data
  })
}

export const get = (url, params = {}) => {
  return request({
    url,
    method: 'get',
    params
  })
}
