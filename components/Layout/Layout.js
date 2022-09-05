import Head from 'next/head'
import { Container } from '@mantine/core'
import Header from '../Layout/Header/Header'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>Soapbox {pageTitle ? `| ${pageTitle}` : null}</title>
        <meta
          name='description'
          content='A soap company secretly meant to demo React custom hooks'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        links={[
          { label: 'Home', link: '/' },
          { label: 'Products', link: '/products' },
          { label: 'About', link: '/about' },
          { label: 'Contact', link: '/contact' },
        ]}
      />
      {children}
    </>
  )
}

export default Layout
