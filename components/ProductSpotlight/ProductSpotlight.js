import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  Grid,
  ThemeIcon,
} from '@mantine/core'
import { IconDroplet } from '@tabler/icons'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}))

export default function Product({ product }) {
  const { classes } = useStyles()
  return (
    <div>
      <Container>
        <Grid grow>
          <Grid.Col sm={12} lg={7} order={2} orderLg={1}>
            <div className={classes.content}>
              <Title className={classes.title}>{product.name}</Title>
              <Text color='dimmed' mt='md'>
                {product.description}
              </Text>

              <List
                mt={30}
                spacing='sm'
                size='sm'
                icon={
                  <ThemeIcon size={20} radius='xl'>
                    <IconDroplet size={12} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Lorem, ipsum.</b> – Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Quisquam, inventore.
                </List.Item>
                <List.Item>
                  <b>Lorem ipsum dolor sit.</b> – Lorem ipsum dolor sit amet
                  consectetur adipisicing.
                </List.Item>
                <List.Item>
                  <b>Lorem ipsum dolor sit amet.</b> – Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Nemo, commodi error.
                </List.Item>
              </List>

              <Group mt={30}>
                <Button radius='xl' size='md' className={classes.control}>
                  Add to cart
                </Button>
                <Button
                  variant='default'
                  radius='xl'
                  size='md'
                  className={classes.control}
                >
                  Favorite
                </Button>
              </Group>
            </div>
          </Grid.Col>
          <Grid.Col sm={12} lg={5} order={1} orderLg={2}>
            <div className={classes.inner}>
              <Image
                src={product.image}
                className={classes.image}
                alt={product.name}
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  )
}
