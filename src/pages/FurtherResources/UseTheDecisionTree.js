import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { questions } from '../../components/DecisionTreeQuestions'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert';

export default function UseTheDecisionTree() {

  const [done, setDone] = useState(false);
  const [n, setN] = useState(0);
  const [finalRequirements, setFinalRequirements] = useState([]);

  function next(yes) {
    var m = questions[n].nextFalse
    if (yes) {
      m = questions[n].nextTrue
      questions[n].requirements.map(it => finalRequirements.push(it));
      setFinalRequirements(finalRequirements)
    }
    if (m == null) {
      setDone(true);
    } else {
      setN(m); 
    }
  }

  function prev() {
    const m = questions[n].prev
    setN(m)
    questions[m].requirements.map(it => finalRequirements.pop());
  }

  function startAgain() {
    if (confirm("You are about to lose all your progress and start all over again.") == true) {
      setN(0);
      setDone(false);
      setFinalRequirements([]);
    }
  }

  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Use the decision tree
      </Typography>

      {!done && 
      <Box>
        <Typography variant="subtitle1" color="primary">Question {questions[n].qnumber}</Typography>
        <Typography paragraph>{questions[n].question}</Typography>
        <Button 
          onClick={() => {next(true)}}
          color="primary" 
          variant="contained"
          sx = {{margin: 1}}
        >
          Yes
        </Button>
        <Button 
          onClick={() => {next(false)}}
          color="primary" 
          variant="contained"
          sx = {{margin: 1}}
        >
          No
        </Button>
        <br/>
        {/* <Button 
          onClick={() => {prev()}}
          color="primary" 
          variant="contained"
          sx = {{margin: 1, mt: 5}}
        >
          Back to the previous question
        </Button> */}
        <br/>
        <Button 
          onClick={() => {startAgain()}}
          color="primary" 
          variant="contained"
          sx = {{margin: 1}}
        >
          Start again from the beginning
        </Button>
      </Box>
      }

      {done && 
        <Box>
          <Typography paragraph>
          You answered all the questions in the decision tree.
          </Typography>

          <Typography paragraph>
          Below are the requirements that apply to you product or service:
          </Typography>

          {finalRequirements.length == 0 && 
          <Typography paragraph>
          <ul>
            <li>No requirements apply</li>
          </ul>
          </Typography>
          }

          <Typography>
          <ul>
            {finalRequirements.map(it =>
                <li>{it}</li>
            )}
          </ul>
          </Typography>

          {/* <Typography paragraph>{finalRequirements.join("; ")}</Typography> */}

          <Button 
            onClick={() => {startAgain()}}
            color="primary" 
            variant="contained"
            sx = {{margin: 1}}
          >
          Use the decision tree again from the start
          </Button>
        </Box>
      }


    </Container>
  )
}
