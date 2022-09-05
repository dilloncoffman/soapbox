import {
  createStyles,
  Title,
  Container,
  Accordion,
  ThemeIcon,
  MantineProvider,
} from '@mantine/core'
import { IconPlus } from '@tabler/icons'

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('control')

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      minHeight: 820,
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][4]} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
      color: theme.black,
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
      overflow: 'hidden',
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: icon,
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${
        theme.colors[theme.primaryColor][6]
      } 0%, ${theme.colors[theme.primaryColor][5]} 100%)`,
    },

    itemOpened: {
      [`& .${icon}`]: {
        transform: 'rotate(45deg)',
      },
    },

    button: {
      display: 'block',
      marginTop: theme.spacing.md,

      '@media (max-width: 755px)': {
        display: 'block',
        width: '100%',
      },
    },
  }
})

const placeholder =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non accusamus atque facilis quod, maiores amet recusandae, placeat natus, praesentium modi nihil. Voluptatum ut illum magni, vero nostrum perspiciatis in incidunt! Illum doloribus recusandae a quam praesentium necessitatibus ipsa tempore amet officiis reiciendis, nesciunt consequuntur omnis, odit corrupti dignissimos, laborum laboriosam iure distinctio harum alias?'

export default function FAQ() {
  const { classes } = useStyles()
  return (
    <MantineProvider inherit theme={{ colorScheme: 'light' }}>
      <div className={classes.wrapper}>
        <Container size='sm'>
          <Title align='center' className={classes.title}>
            Frequently Asked Questions
          </Title>

          <Accordion
            chevronPosition='right'
            defaultValue='reset-password'
            chevronSize={50}
            variant='separated'
            disableChevronRotation
            chevron={
              <ThemeIcon radius='xl' className={classes.gradient} size={32}>
                <IconPlus size={18} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <Accordion.Item className={classes.item} value='reset-password'>
              <Accordion.Control>
                Is liquid soap better than bars of soap?
              </Accordion.Control>
              <Accordion.Panel>Yes.</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value='another-account'>
              <Accordion.Control>But why?</Accordion.Control>
              <Accordion.Panel>Because.</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value='newsletter'>
              <Accordion.Control>
                Lorem ipsum dolor sit amet consectetur adipisicing?{' '}
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value='credit-card'>
              <Accordion.Control>Lorem ipsum dolor sit amet?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value='payment'>
              <Accordion.Control>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </MantineProvider>
  )
}
