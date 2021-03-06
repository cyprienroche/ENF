import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Home() {
  return (
    <Container>
        <Typography
          variant="h2" 
          color="primary"
          component="h1"
          gutterBottom
        >
          EN 301 549 Facilitator
        </Typography>

        <Typography paragraph>
          The <b>EN 301 549 Facilitator (ENF)</b> is a tool to help people <b>understand the EN 301 549 standard</b>, a European standard on accessibility.
        </Typography>

        <Typography paragraph>
          Start using the ENF by clicking on the elements on the left hand side of the screen. 
        </Typography>

        <Typography variant="subtitle1" color="primary">Scope</Typography>
        <Typography paragraph>
          This is a <b>prototype</b> built as part of a master thesis at the Universidad Politécnica de Madrid.
          <br />
          It is <b>not meant to be used in production</b> and is <b>not a real working product</b>.
        </Typography>

        <Typography variant="subtitle1" color="primary">Questions</Typography>
        <Typography paragraph>
          Please email cyprienroche@duck.com if you have any questions.
        </Typography>
    </Container>
  )
}
