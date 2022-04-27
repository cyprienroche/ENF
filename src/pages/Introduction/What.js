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

      <Typography paragraph>
      The EN 301 549 is a European standard on accessibility requirements for Information and Communications Technology (ICT) products and services.
      </Typography>
      
      <Typography paragraph>
      At its core, the EN 301 549 describes the behaviors and characteristics a product or service must possess to be accessible. 
      It does so through a set of requirements spread across chapters 5 to 13. 
      In the same way one might have dietary requirements, the EN 301 549 defines accessibility requirements for ICT products and services.
      </Typography>
      
      <Typography paragraph>
      For example, as someone allergic to nuts, I am only able to order certain dishes at any given restaurant: those not containing nuts. 
      If all options on the menu contain nuts, then I will be unable to eat at this restaurant. 
      And in the worst scenario where all restaurants around me only o"er meals with nuts, then I won't be able to have lunch. 
      I will be at a great disadvantage compared to all other people who can eat nuts.
      </Typography>
      
      <Typography paragraph>
      It is similar with accessibility requirements. 
      Instead of food allergies, some people have disabilities and are unable to perform certain actions. 
      In some cases, they cannot use a given product or service because of their limited abilities.
      <br/>
      However, by meeting the accessibility requirements defined in the EN 301 549 standard, 
      this enables everyone to use a given product or service and creates equal opportunities to all.
      </Typography>
      
      <Typography paragraph>
      While the EN 301 549 is set of requirements at its core, it is also more than that: it is a standard. 
      As a standard, the EN 301 549 was created and approved by recognized organizations: the three European Standardization Organizations (ESOs).
      </Typography>
      
    </Container>
  )
}
