import {
  Grid,
  SimpleGrid,
  Container,
  Skeleton,
  useMantineTheme,
  Box,
  Loader,
} from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { getLiquids, getBars } from '../utils/api'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import FAQ from '../components/FAQ/FAQ'
import PageLoader from '../components/Loaders/PageLoader'
import AliveProductGrid from '../components/AliveProductGrid/AliveProductGrid'

export default function Home() {
  return (
    <Layout pageTitle='Home'>
      <Hero />
      <Container my='lg'>
        <AliveProductGrid />
      </Container>
      <FAQ />
    </Layout>
  )
}
