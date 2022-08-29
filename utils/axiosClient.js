import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: 'https://mockend.com/dilloncoffman/soapbox',
})
