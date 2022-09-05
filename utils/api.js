import { axiosClient } from './axiosClient'

const getLiquids = async () => {
  const { data } = await axiosClient.get('/data/liquids.json')
  return data
}

const getBars = async () => {
  const { data } = await axiosClient.get('/data/bars.json')
  return data
}
export { getLiquids, getBars }
