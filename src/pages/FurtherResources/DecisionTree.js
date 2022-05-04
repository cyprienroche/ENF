import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export default function DecisionTree() {

  const [showQuestions, setShowQuestioins] = useState(false);

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
            onClick={() => setShowQuestioins(prev => !prev)}
            color="primary" 
            variant="contained"
            href="#decision-tree"
            sx = {{margin: 3}}
          >
            Use the decision tree
          </Button>
      </Box>

      {showQuestions && 
      <Box>
        <Typography paragraph>
        Question 18: Is the ICT system hardware or contains hardware components?
        <br />
        If yes, then requirement 8.1.3 applies.
        </Typography>

        <Typography paragraph>
        Question 29: Is the ICT system a non-web document or contains non-web documents?
        <br />
        If yes, then requirement 10.1.4.1 applies.
        </Typography>

        <Typography paragraph>
        Question 30: Is the ICT system is a software or contains software?
        <br />
        If yes, then requirement 11.5.2.4 applies.
        </Typography>
      </Box>
      }

    </Container>
  )
}
