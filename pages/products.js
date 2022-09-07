import { Alert, Container, SimpleGrid } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import PageLoader from '../components/Loaders/PageLoader'
import ProductCard from '../components/ProductCard/ProductCard'
import useFetchProducts from '../hooks/useFetchProducts'
import { IconAlertCircle } from '@tabler/icons'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

export default function Products() {
  const {
    data: products,
    error: errorGettingProducts,
    isLoading: loadingProducts,
  } = useFetchProducts()

  if (loadingProducts) return <PageLoader />

  return (
    <Layout pageTitle='Products'>
      <Container my='lg'>
        <h1>Products</h1>
        {errorGettingProducts ? (
          <Alert
            icon={<IconAlertCircle size={16} />}
            title='Bummer!'
            color='red'
          >
            There was a problem getting products. ${error?.response?.message}
          </Alert>
        ) : (
          <>
            <ScrollToTop />
            <SimpleGrid cols={3} spacing='sm'>
              {products?.map((product) => (
                <ProductCard
                  key={`${product.name}-${product.id}`}
                  product={product}
                />
              ))}
            </SimpleGrid>
          </>
        )}
      </Container>
    </Layout>
  )
}
