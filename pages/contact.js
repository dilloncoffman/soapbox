import { Container } from '@mantine/core'
import Layout from '../components/Layout/Layout'
import ContactUs from '../components/Contact/ContactUs'

export default function Contact() {
  return (
    <Layout pageTitle='Contact'>
      <Container my='lg'>
        <ContactUs />
      </Container>
    </Layout>
  )
}
