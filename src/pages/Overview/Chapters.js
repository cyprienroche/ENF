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
      The most important chapters of the standard are chapters 4, 5 to 13, and Annex C. The chapters can be grouped as follows:
      </Typography>

      <Box textAlign='center' sx={{margin: 3}}>
        <img 
          src={process.env.PUBLIC_URL + "/images/structure.jpg"}  
          alt="Structure of the EN 301 549 standard"
          width="65%"
        />
      </Box>

      <Typography paragraph>
      Chapters 1 to 3 define the background, the scope, references, and definitions relevant to the standard.
      </Typography>
      
      <Typography paragraph>
      Chapter 4 describes people with disabilities as users of ICT products and services. 
      It describes their needs and what must be done to make a product or service accessible. 
      For example, if a user cannot see, the ICT must provide a sound. 
      If a user cannot hear, the ICT must provide some text.
      It also contains general accessibility requirements, which are made more specific in clauses 5 to 13.
      </Typography>
      
      <Typography paragraph>
      Chapters 5 to 13 contain detailed requirements grouped by ICT functionality or characteristics.
      </Typography>
      
      <Typography paragraph>
      Chapter 14 gives a general overview of how to assess the conformance of an ICT product or service to the standard.
      </Typography>
      
      <Typography paragraph>
      Annex A defines the essential requirements a product or service must satisfy to comply with a European Directive (Directive 2016/2102).
      </Typography>

      <Typography paragraph>
      Annex B shows the relationship between the detailed requirements (chapters 5 to 13) and the functional performance statements (chapter 4).
      </Typography>

      <Typography paragraph>
      Annex C provides a way to test whether of a product or service meets the requirements of chapters 5 to 13. It is a practical summary of chapters 5 to 13.
      </Typography>

      <Typography paragraph>
      Annex D contains further resources for cognitive accessibility.
      </Typography>

      <Typography paragraph>
      Annex E provides guidance to readers. It is designed to help readers make the best use of the standard as a document.
      </Typography>

      <Typography paragraph>
      Annex F contains a change history table
      </Typography>
      
    </Container>
  )
}
