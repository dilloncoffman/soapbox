import { axiosClient } from './axiosClient'

const getLiquids = async () => {
  const { data } = await axiosClient.get('/data/liquids.json')
  return data
}

const getBars = async () => {
  const { data } = await axiosClient.get('/data/bars.json')
  return data
}

const getProducts = async () => {
  const { data: liquidSoapProducts } = await axiosClient.get(
    '/data/liquids.json'
  )
  const { data: barSoapProducts } = await axiosClient.get('/data/bars.json')

  return [...liquidSoapProducts, ...barSoapProducts]
}

export { getLiquids, getBars, getProducts }
