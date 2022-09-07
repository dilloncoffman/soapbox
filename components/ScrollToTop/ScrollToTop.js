import { useState } from 'react'
import { ActionIcon } from '@mantine/core'
import { useWindowScroll, useWindowEvent } from '@mantine/hooks'
import { IconArrowUpCircle } from '@tabler/icons'

export default function ScrollToTop() {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false)
  const [scroll, scrollTo] = useWindowScroll()

  useWindowEvent('scroll', () => {
    if (window.scrollY > 300) {
      setShowScrollToTopButton(true)
    } else {
      setShowScrollToTopButton(false)
    }
  })

  if (!showScrollToTopButton) return null

  return (
    <ActionIcon
      sx={{ position: 'fixed', bottom: 40, right: 30, zIndex: 20 }}
      onClick={() => scrollTo({ y: 0 })}
      size='xl'
      variant='gradient'
    >
      <IconArrowUpCircle />
    </ActionIcon>
  )
}
