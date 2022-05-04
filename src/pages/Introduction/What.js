import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function What() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        What is the EN 301 549
      </Typography>

      <Typography paragraph>This page explains what the standard is at its core: a set of requirements</Typography>

      <Typography variant="subtitle1" color="primary">The Idea</Typography>
      <Typography paragraph>
      The EN 301 549 is <b>a European standard on accessibility</b> requirements for Information and Communications Technology (ICT) products and services.
      </Typography>
      
      <Typography paragraph>
      At its core, the EN 301 549 <b>describes the behaviors and characteristics</b> a product or service must possess to be accessible. 
      It does so through <b>a set of requirements</b> spread across chapters 5 to 13. 
      In the same way one might have dietary requirements, the EN 301 549 defines accessibility requirements for ICT products and services.
      </Typography>
      
      <Typography variant="subtitle1" color="primary">An Analogy</Typography>
      <Typography paragraph>
      For example, as someone allergic to nuts, I am only able to order certain dishes at any given restaurant: those not containing nuts. 
      If all options on the menu contain nuts, then I will be unable to eat at this restaurant. 
      And in the worst scenario where all restaurants around me only offer meals with nuts, then I won't be able to have lunch. 
      <i>I will be at a great disadvantage compared to all other people who can eat nuts.</i>
      </Typography>
      
      <Typography paragraph>
      It is similar with accessibility requirements. 
      Instead of food allergies, some people have disabilities and are unable to perform certain actions. 
      In some cases, they cannot use a given product or service because of their limited abilities.
      <br/>
      However, by meeting the accessibility requirements defined in the EN 301 549 standard, 
      this enables <i>everyone</i> to use a given product or service and creates equal opportunities to all.
      </Typography>
      
      <Typography variant="subtitle1" color="primary">Beyond Requirements</Typography>
      <Typography paragraph>
      While the EN 301 549 is set of requirements at its core, it is also more than that: it is a standard. 
      As a standard, the EN 301 549 was <b>created and approved by recognized organizations</b>: the three European Standardization Organizations (ESOs).
      </Typography>
      
    </Container>
  )
}
