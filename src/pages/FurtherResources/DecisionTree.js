import React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function DecisionTree() {

  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        The Decision Tree
      </Typography>

      <Button 
        onClick={() => {alert('Decision tree not implemented yet')}}
        color="primary" 
        variant="contained"
        href="#decision-tree"
      >
        Use the decision tree
      </Button>


    </Container>
  )
}
