import { Container } from '@mantine/core'
import { axiosClient } from '../../utils/axiosClient'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../components/Layout/Layout'
import ProductSpotlight from '../../components/ProductSpotlight/ProductSpotlight'

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
      <Container my='lg'>
        <ProductSpotlight product={product} />
      </Container>
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
