import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function DecisionTreeQuestions() {

  const [showQuestion1, setShowQuestion1] = useState(true);
  const [done, setDone] = useState(false);


  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);


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

      {showQuestion1 && !done &&
        <Box>
          <Typography variant="subtitle1" color="primary">Question 1</Typography>
          <Typography paragraph>Is the ICT system hardware or contains hardware components?</Typography>
          <Button 
            onClick={() => {setQuestion1(true); setShowQuestion1(false)}}
            color="primary" 
            variant="contained"
            sx = {{margin: 1}}
          >
            Yes
          </Button>
          <Button 
            onClick={() => {setQuestion1(false); setShowQuestion1(false)}}
            color="primary" 
            variant="contained"
            sx = {{margin: 1}}
          >
            No
          </Button>

        </Box>
      }

      {!showQuestion1 && !done &&
        <Box>
          <Typography variant="subtitle1" color="primary">Question 2</Typography>
          <Typography paragraph>Is the ICT system a non-web document or contains non-web documents?</Typography>
          <Button 
            onClick={() => {setQuestion2(true); setDone(true)}}
            color="primary" 
            variant="contained"
            sx = {{margin: 1}}
          >
            Yes
          </Button>
          <Button 
            onClick={() => {setQuestion2(false); setDone(true)}}
            color="primary" 
            variant="contained"
            sx = {{margin: 1}}
          >
            No
          </Button>
        </Box>
      }

      {done && 
      <Box>
        <Typography paragraph>
        You answered all the questions in the decision tree.
        <br />
        Find the requirements that apply to you product or service below.
        </Typography>
        <Button 
              onClick={() => {setShowQuestion1(true); setQuestion1(false); setQuestion2(false); setDone(false)}}
              color="primary" 
              variant="contained"
              sx = {{margin: 1 }}
            >
              Use the decision tree again
        </Button>
      </Box>
      }
      
      <Typography variant="subtitle1" color="primary" sx={{'margin-top': '20%'}}>Requirements that apply</Typography>
      {question1 && <Typography paragraph>requirement 8.1.3</Typography>}
      {question2 && <Typography paragraph>requirement 10.1.4.1</Typography>}


    </Container>
  )
}
