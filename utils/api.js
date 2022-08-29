import { axiosClient } from './axiosClient'

const getLiquids = async () => {
  const { data } = await axiosClient.get('/liquids')
  return data
}

const getBars = async () => {
  const { data } = await axiosClient.get('/bars')
  return data
}
export { getLiquids, getBars }
