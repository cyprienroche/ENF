import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

export default function DecisionTree() {

  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        The decision tree
      </Typography>

      <Typography>
      The decision tree tool is to help people identify which requirements of the EN 301 549 standard apply to an ICT product or service. 
      The decision tree contains 37 questions about the product or service. 
      After answering all questions, a list of requirements applicable to the product or service is obtained.
      </Typography>
      <Box textAlign='center'>
          <Button 
            onClick={() => {alert('Decision tree not implemented yet')}}
            color="primary" 
            variant="contained"
            href="#decision-tree"
            sx = {{margin: 3}}
          >
            Use the decision tree
          </Button>
      </Box>
      

      <Typography>
      The decision tree is also available in Spanish and can be viewed in chapter 7 of the book “Accesibilidad TIC en compras publicas”.
      </Typography>


    </Container>
  )
}
