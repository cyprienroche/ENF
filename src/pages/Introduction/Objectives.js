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
      {/* There are <b style={() => {return {'color': introTheme.palette.primary.main}}}>3 objectives</b> to the EN 301 549 standard: */}

      This page presents the <b class="introColor">3 objectives</b> of the EN 301 549 standard:
      <ol>
        <li><b class="introColor">Define a set of requirements</b> that make an ICT product or service accessible in Europe</li>
        <li>Enable organizations to <b class="introColor">test the conformance</b>, and so the accessibility, of ICT products and services</li>
        <li><b class="introColor">Provide a formal and official document</b> that can easily be integrated into the European legislation</li>
      </ol>
      </Typography>

      <Typography paragraph>
      Ultimately, the EN 301 549 standard aims to enable people with disabilities to use ICT products and services as equally as people without disabilities.
      </Typography>
      
    </Container>
  )
}
