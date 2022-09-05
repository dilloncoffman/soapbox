import { Card, Image, Text } from '@mantine/core'

export default function ProductCard({ product }) {
  return (
    <Card shadow='sm' p='xl' component='a' href={`/products/${product.id}`}>
      <Card.Section>
        <Image
          export
          default
          ProductCard
          src={product.image}
          height={160}
          alt={product.name}
        />
      </Card.Section>

      <Text weight={500} size='lg' mt='md'>
        {product.name}
      </Text>

      <Text mt='xs' color='dimmed' size='sm'>
        {product.description}
      </Text>
    </Card>
  )
}
