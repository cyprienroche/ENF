import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';

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

      <Typography paragraph>
      The decision tree is a tool that helps people <b className='furtherColor'>identify the requirements of the EN 301 549 standard which apply to an ICT product or service.</b>
      The decision tree contains 37 questions about the product or service. 
      After answering all questions, a list of requirements applicable to the product or service is obtained.
      </Typography>

      <Typography paragraph>
      The decision tree is also available in Spanish and can be viewed in chapter 7 of the book <a href="http://e-spacio.uned.es/fez/view/bibliuned:EditorialUNED-aa-EDU-Arodriguez-0004">“Accesibilidad TIC en compras publicas”</a>.
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


    </Container>
  )
}
