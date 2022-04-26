import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function NoPage() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        404
      </Typography>
    </Container>
  )
}
