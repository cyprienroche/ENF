import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';

const imagePath = '../../../public/structure.jpg';

export default function Chapters() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        The chapters of the standard
      </Typography>

      <Typography paragraph>
        This page provides an overview of the chapters and what they are about. 
      </Typography>

      <Typography variant="subtitle1" color="primary">The Idea</Typography>
      <Typography paragraph>
      The most important chapters of the standard are chapters 4, 5 to 13, and Annex C. The chapters can be grouped as follows:
      </Typography>

      <Box textAlign='center' sx={{margin: 3}}>
        <img 
          src={process.env.PUBLIC_URL + "/images/structure.jpg"}  
          alt="Structure of the EN 301 549 standard. Chapter 4 is about user needs and Chapters 5 to 13 are about the requirements."
          width="65%"
        />
      </Box>

      <Typography variant="subtitle1" color="primary">In More Details</Typography>
      <Typography paragraph>
      <b className='overviewColor'>Chapters 1 to 3</b> define the background, the scope, references, and definitions relevant to the standard.
      </Typography>
      
      <Typography paragraph>
      <b className='overviewColor'>Chapter 4</b> describes <b>people with disabilities as users</b> of ICT products and services. 
      It describes their needs and what must be done to make a product or service accessible.
      <br /> 
      <i>For example</i>, if a user cannot see, the ICT must provide a sound. 
      If a user cannot hear, the ICT must provide some text.
      It also contains general accessibility requirements, which are made more specific in clauses 5 to 13.
      </Typography>
      
      <Typography paragraph>
      <b className='overviewColor'>Chapters 5 to 13</b> contain <b>detailed requirements</b> grouped by ICT functionality or characteristics.
      </Typography>
      
      <Typography paragraph>
       <b className='overviewColor'>Chapter 14</b> gives a general overview of <b>how to assess the conformance</b> of an ICT product or service to the standard.
      </Typography>
      
      <Typography paragraph>
       <b className='overviewColor'>Annex A</b> defines the essential requirements a product or service must satisfy to comply with a <b>European Directive (Directive 2016/2102)</b>.
      </Typography>

      <Typography paragraph>
       <b className='overviewColor'>Annex B</b> shows the relationship between the detailed requirements (chapters 5 to 13) and the functional performance statements (chapter 4).
      </Typography>

      <Typography paragraph>
       <b className='overviewColor'>Annex C</b> provides a way to <b>test whether of a product or service meets the requirements</b> of chapters 5 to 13.
      </Typography>

      <Typography paragraph>
       <b className='overviewColor'>Annex D</b> contains further resources for cognitive accessibility.
      </Typography>

      <Typography paragraph>
       <b className='overviewColor'>Annex E</b> provides guidance to readers. It is designed to help readers make the best use of the standard as a document.
      </Typography>

      <Typography paragraph>
       <b className='overviewColor'>Annex F</b> contains a change history table
      </Typography>
      
    </Container>
  )
}
