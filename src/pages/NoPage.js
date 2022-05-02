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
        Error 404
      </Typography>
      
      <Typography paragraph>
        Sorry, the page you requested was <b>not found</b>. 
      </Typography>
      
    </Container>
  )
}
