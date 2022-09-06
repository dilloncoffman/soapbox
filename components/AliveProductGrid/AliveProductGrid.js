import { SimpleGrid, Skeleton } from '@mantine/core'
import useCyclingProducts from '../../hooks/useCyclingProducts'
import ProductCard from '../ProductCard/ProductCard'

export default function AliveProductGrid() {
  const cycledProducts = useCyclingProducts()
  const cycledProductsExist = cycledProducts?.length > 0

  return (
    <SimpleGrid cols={cycledProductsExist ? 3 : 1} spacing='sm'>
      {cycledProductsExist ? (
        <>
          {cycledProducts?.map((product) => (
            <ProductCard
              key={`${product.name}-${product.id}`}
              product={product}
            />
          ))}
        </>
      ) : (
        <Skeleton sx={{ minHeight: 575, width: '100%' }} />
      )}
    </SimpleGrid>
  )
}
