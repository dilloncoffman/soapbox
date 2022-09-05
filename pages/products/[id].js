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
        {/* <h1>{product.name}</h1>
        <p>{product.description}</p>
        <Image
          src={product.image}
          alt='Picture of the author'
          width={500}
          height={500}
          layout='responsive'
        /> */}
        <ProductSpotlight product={product} />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { data: products } = await axiosClient.get('/data/bars.json')

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const productId = context.params?.id
  const { data: products } = await axiosClient.get('/data/bars.json')

  const foundProduct = products.find((item) => productId === item.id.toString())

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
