import { SimpleGrid, Skeleton } from '@mantine/core'
import useCyclingProducts from '../../hooks/useCyclingProducts'
import ProductCard from '../ProductCard/ProductCard'

export default function AliveProductGrid() {
  const cycledProducts = useCyclingProducts()
  const cycledProductsExist = cycledProducts?.length > 0

  return (
    <SimpleGrid
      breakpoints={[
        { maxWidth: 980, cols: 3 },
        { maxWidth: 755, cols: 2 },
        { maxWidth: 600, cols: 1 },
      ]}
      cols={cycledProductsExist ? 3 : 1}
      spacing='sm'
    >
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
