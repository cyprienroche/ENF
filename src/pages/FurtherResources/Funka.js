import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Funka() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Funka videos
      </Typography>

      <Typography paragraph>
      There are 13 videos produced by Funka available on YouTube for free. 
      This video series will help you better understand the EN 301 549 standard at di"erent levels of depth.
      </Typography>
      
      <Typography paragraph>
      The first video gives an overview of the standard and its purpose.
      <br />
      The next two videos give an intermediate level overview of the standard.
      You will learn about the structure of the standard and see real-world examples.
      </Typography>
      
      <Typography paragraph>
      The remaining of the videos give a much more detailed presentation of the standard.
      They explore every chapter and every requirement in depth with rich examples.
      </Typography>
      
      <Typography paragraph>
      However, a downside is that the videos are a bit old and do not cover the most recent version of the standard.
      The latest version of the standard is v3.2.1.
      </Typography>
      
    </Container>
  )
}
