import { Container } from '@mantine/core'
import { axiosClient } from '../../utils/axiosClient'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import ProductSpotlight from '../../components/ProductSpotlight/ProductSpotlight'
import AliveProductGrid from '../../components/AliveProductGrid/AliveProductGrid'
import FAQ from '../../components/FAQ/FAQ'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

export default function Product({ product, hasError }) {
  const router = useRouter()

  if (hasError) {
    return <h1>Error - please try another product ID</h1>
  }

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout pageTitle={product.name}>
      <ScrollToTop />
      <Container my='lg'>
        <ProductSpotlight product={product} />
        <div>
          <h2>You might like these products...</h2>
          <AliveProductGrid />
        </div>
      </Container>
      <FAQ />
    </Layout>
  )
}

export async function getStaticPaths() {
  const { data: liquidSoapProducts } = await axiosClient.get(
    '/data/liquids.json'
  )
  const { data: barSoapProducts } = await axiosClient.get('/data/bars.json')

  const products = [...liquidSoapProducts, ...barSoapProducts]

  const paths = products.map((product) => ({
    params: { id: `${product.name}-${product.id}` },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const productId = context.params?.id
  const { data: liquidSoapProducts } = await axiosClient.get(
    '/data/liquids.json'
  )
  const { data: barSoapProducts } = await axiosClient.get('/data/bars.json')

  const products = [...liquidSoapProducts, ...barSoapProducts]

  const foundProduct = products.find(
    (product) => productId === `${product.name}-${product.id}`
  )

  if (!foundProduct) {
    return {
      props: { hasError: true },
    }
  }

  return {
    props: {
      product: foundProduct,
    },
  }
}
