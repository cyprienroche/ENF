import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Home() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Understanding the EN 301 549 standard
      </Typography>
    </Container>
  )
}
