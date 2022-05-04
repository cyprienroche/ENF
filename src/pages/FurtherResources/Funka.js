import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

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
      There are <a href="https://www.youtube.com/channel/UCdW_0pPNiiPLaLM90_20org">13 videos produced by Funka available on YouTube</a> for free. 
      <b className='furtherColor'>This video series will help you better understand the EN 301 549 standard at different levels of depth.</b>
      </Typography>
      
      <Typography paragraph>
      The <b>first video</b> gives an overview of the standard and its purpose.
      <br />
      The <b>next two videos</b> give an intermediate level overview of the standard.
      You will learn about the structure of the standard and see real-world examples.
      <br />
      The <b>remaining of the videos</b> give a much more detailed presentation of the standard.
      They explore every chapter and every requirement in depth with rich examples.
      </Typography>
      
      <Typography paragraph>
      However, a downside is that the videos are a bit old and do not cover the most recent version of the standard.
      The latest version of the standard is v3.2.1.
      </Typography>

      <Box textAlign='center'>
          <Button 
            onClick={() => {alert('Funka videos not linked yet')}}
            color="primary" 
            variant="contained"
            href="#decision-tree"
            sx = {{margin: 3}}
          >
            Watch the Funka videos
          </Button>
      </Box>
      
    </Container>
  )
}
