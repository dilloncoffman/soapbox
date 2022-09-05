import { Box, Loader } from '@mantine/core'

export default function PageLoader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Loader size='xl' />
    </Box>
  )
}
