import { Card, Image, Text } from '@mantine/core'

export default function ProductCard({ product }) {
  return (
    <Card
      shadow='sm'
      p='xl'
      component='a'
      href={`/products/${product.name}-${product.id}`}
      sx={{ minHeight: 281 }}
    >
      <Card.Section>
        <Image
          withPlaceholder
          src={product.image}
          height={160}
          alt={product.name}
        />
      </Card.Section>

      <Text weight={500} size='lg' mt='md'>
        {product.name}
      </Text>

      <Text
        mt='xs'
        color='dimmed'
        size='sm'
        sx={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {product.description}
      </Text>
    </Card>
  )
}
