import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Objectives() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Objectives of the EN 301 549 standard
      </Typography>

      <Typography paragraph>
      There are 3 objectives to the EN 301 549 standard:
      <ol>
        <li>Define a set of requirements that make an ICT product or service accessible in Europe</li>
        <li>Enable organizations to test the conformance, and so the accessibility, of ICT products and services</li>
        <li>Provide a formal and o!cial document that can easily be integrated into the European legislation</li>
      </ol>
      </Typography>

      <Typography paragraph>
      Ultimately, the EN 301 549 standard aims to enable people with disabilities to use ICT products and services as equally as people without disabilities.
      </Typography>
      
      <Typography paragraph>
      Offcially, the standard only applies to the public sector as of today. However, this is will change in the years to come; the scope of the standard will extend to the private sector too.
      </Typography>
      
    </Container>
  )
}
