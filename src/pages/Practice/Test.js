import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Test() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Determining whether a product or service meets a requirement
      </Typography>

      <Typography paragraph>
      Chapter 14 on Conformance of the standard gives a good explanation of 
      how to determine whether a product or service meets a requirement. 
      This page will attempt to rephrase and summarize that chapter.
      </Typography>
      
      <Typography paragraph>
      As explained in the page Determining which requirements apply to a product or service, requirements consist of two parts; 
      a pre-condition and the requirement, and are written in the form ”Where ICT !pre-condition!, it shall provide !requirement!”.
      If the first part is true, the ICT must meet the requirement.
      If the first part is not true, the requirement is not applicable.
      </Typography>
      
      <Typography paragraph>
      Testing a product or service against a requirement results in one the following outcome:
      <ul>
        <li>not applicable</li>
        <li>pass</li>
        <li>fail</li>
        <li>not testable (in exceptional circumstances)</li>
      </ul>
      </Typography>
      
      <Typography paragraph>
      To understand how to determine whether a requirement is applicable or not 
      refer back to the Determining which requirements apply to a product or service page.
      </Typography>
      
      <Typography paragraph>
      Assume that the pre-condition of a requirement is true for a product or service. 
      To determine whether a product or service meets that requirement, first locate the corresponding test in Annex C. 
      This is easily done as the tests in Annex C are presented in ascending order. 
      Then, test the product or service by following the procedure defined in the test. 
      The result section explains how to determine whether the procedure results in a pass or a fail.
      </Typography>

      <Typography paragraph>
      To claim a product or service conforms to the standard, it must result in a pass for all the applicable requirements.
      </Typography>

      <Typography paragraph>
      As an example, imagine I am writing a monthly newsletter for sta" and students at a public university in Europe.
      I then identify all the requirements that apply to this non-web document, one of which is requirement 10.1.4.1 on the use of color.
      </Typography>

      <Typography paragraph>
      I then turn to Annex C and locate the test for requirement 10.1.4.1. 
      The pre-condition is ”The ICT is a non-web document” which confirms this requirement does apply to the newsletter. 
      To determine whether it passes the test, I follow the procedure: 
      ”Check that the document does not fail WCAG 2.1 Success Criterion 1.4.1 Use of Color”.
      <br/>
      After clicking on the link in the procedure, I find out the WCAG 2.1 Success Criterion 1.4.1: 
      ”Color is not used as the only visual means of conveying information,
      indicating an action, prompting a response, or distinguishing a visual element”. 
      I test my newsletter against this Success Criterion.
      </Typography>

      <Typography paragraph>
      I use the result part of test 10.1.4.1 in the standard to determine whether the requirement is satisfied or not.
      <br/>
      In this case, if Success Criterion 1.4.1 from WCAG is true for the newsletter, then the newsletter satisfies requirement 10.1.4.1 of the EN 301 549 standard.
      <br/>
      If Success Criterion 10.1.4.1 from WCAG is false for the newsletter, then the newsletter does not satisfy requirement 10.1.4.1 of the EN 301 549 standard.
      </Typography>
      
    </Container>
  )
}
