import { Container, SimpleGrid, Skeleton } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { getLiquids, getBars } from '../utils/api'
import Layout from '../components/Layout/Layout'
import PageLoader from '../components/Loaders/PageLoader'
import ProductCard from '../components/ProductCard/ProductCard'

export default function Products() {
  const { data: liquidSoaps, isLoading: loadingLiquidSoaps } = useQuery(
    ['liquidSoaps'],
    getLiquids
  )
  const { data: barsOfSoap, isLoading: loadingBarsOfSoap } = useQuery(
    ['barsOfSoap'],
    getBars
  )

  if (loadingBarsOfSoap || loadingLiquidSoaps) return <PageLoader />

  return (
    <Layout pageTitle='Products'>
      <Container my='lg'>
        <h1>Products</h1>
        <SimpleGrid cols={3} spacing='sm'>
          {liquidSoaps?.map((liquidSoap) => (
            <ProductCard key={liquidSoap.id} product={liquidSoap} />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
