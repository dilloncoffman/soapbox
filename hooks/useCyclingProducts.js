import { useState, useEffect } from 'react'
import useFetchProducts from './useFetchProducts'
import shuffle from 'lodash/shuffle'

const useCyclingProducts = (delay = 3000) => {
  const { data: products } = useFetchProducts()
  const [cycledProducts, setCycledProducts] = useState(
    shuffle(products)?.slice(0, 6) ?? null
  )

  const cycleProducts = () => {
    if (products?.length > 0) {
      setCycledProducts(shuffle(products).slice(0, 6))
    }
  }

  useEffect(() => {
    const cycledProductsTimeout = setTimeout(cycleProducts, delay)

    return () => clearTimeout(cycledProductsTimeout)
  })

  return cycledProducts
}

export default useCyclingProducts
