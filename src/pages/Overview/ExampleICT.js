import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function ExampleICT() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Example ICT for which the chapters apply
      </Typography>

      <Typography paragraph>
      The technical requirements of the standard are spread across chapters 5 to 13.
      </Typography>
      
      <Typography paragraph>
      Chapter 5 applies to closed functionality technology. Closed functionality means the user cannot attach assistive products.
      For example, if someone with limited vision cannot attach a screen reader to the ICT,
      then that ICT is considered to have closed functionality.
      </Typography>
      
      <Typography paragraph>
      Chapter 10 refers to digital documents that are not web pages such as spreadsheets, presentations, user manuals, or newsletters.
      </Typography>
      
    </Container>
  )
}
