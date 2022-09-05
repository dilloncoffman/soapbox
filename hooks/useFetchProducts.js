import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../utils/api'

const useFetchProducts = () => useQuery(['getProducts'], getProducts)

export default useFetchProducts
