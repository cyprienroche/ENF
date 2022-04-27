import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Requirements() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Determining which requirements apply to a product or service
      </Typography>

      <Typography paragraph>
      There are 4 approaches to determine which requirements of the EN 301 549 standard apply to a specific product or service:
      </Typography>
      
      <Typography paragraph>
      To use the first approach, it is essential to understand how the requirements are formulated. 
      All the requirements consist of two parts; 
      a pre-condition and the requirement, and are written in the form ”Where ICT (pre-condition), it shall provide (requirement)”.
      <br/>
      If the first part is true, the ICT must meet the requirement. 
      If the first part is not true, then the requirement is not applicable. 
      The pre-conditions of every requirements are presented in Annex C.
      </Typography>
      
      <Typography paragraph>
      Annex A is a good approach when the product or service must conform to Directive (EU) 2016/2102 of the European Union. 
      Annex A defines the essential requirements the product or service must satisfy to comply with the directive. 
      To know which products and services must comply with the directive, use the Products and services that must conform to the standard page.
      </Typography>
      
      <Typography paragraph>
      As an example, imagine I am building an o!ce thermostat controller for a European public hospital. 
      Note that it is not possible to attach assistive products to the thermostat controller. 
      For example, a blind person would not be able to install a screen reader on the thermostat controller. 
      Therefore, it has closed functionality.
      </Typography>
      
      <Typography paragraph>
      Using the standard approach, I would turn to chapter 5 and start reading. 
      Eventually I would read the following: 5.1.2.2 “Where ICT has closed functionality, ...”. 
      Since the thermostat controller has closed functionality, then I know it must meet requirement 5.1.2.2. 
      I record it on a side note and continue reading.
      </Typography>

      <Typography paragraph>
      Using the Annex C approach, I would turn to Annex C read the pre-condition of C5.1.2.2: “The ICT has closed functionality”.
      It is true, so I know the product must meet requirement 5.1.2.2. 
      I record it on a side note and continue parsing the pre-conditions of the tables of Annex C.
      </Typography>

      <Typography paragraph>
      Using the decision tree approach, I would answer question 1: “Does the ICT system have closed functionality?”.
      The answer is yes, so I know the thermostat controller must meet requirement 5.1.2.2. 
      But just by answering question 1 I also know it must meet requirements 5.1.2.1, 5.1.3.16, 5.1.4, 5.1.5, 5.1.7. 
      I record that on a side note and continue answering the questions of the decision tree.
      To find out more about the decision tree visit the decision tree page.
      </Typography>

      <Typography paragraph>
      In this example, hit is not possible to use Annex A since the thermostat controller is not a website or mobile application.
      </Typography>
      
    </Container>
  )
}
