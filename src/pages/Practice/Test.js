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
        This page explains how to test a product or service and know whether is meets a given requirement: by using Annex C.
      </Typography>

      <Typography variant="subtitle1" color="primary">Recap</Typography>

      <Typography paragraph>
      As explained in the page Determining which requirements apply to a product or service, requirements consist of two parts; 
      a pre-condition and the requirement, and are written in the form <i>”Where ICT &lt;pre-condition&gt;, it shall provide &lt;requirement&gt;”</i>.
      <br />
      If the first part is <i>true</i>, the ICT must meet the requirement.
      <br />
      If the first part is <i>not true</i>, the requirement is not applicable.
      </Typography>
      
      <Typography variant="subtitle1" color="primary">The Possible Outcomes</Typography>

      <Typography paragraph>
      Testing a product or service against a requirement results in one the following outcome:
      </Typography>

      <Typography>
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
      
      <Typography variant="subtitle1" color="primary">How To Test A Product Or Service</Typography>

      <Typography paragraph>
      Assume that the pre-condition of a requirement is true for a product or service. 
      <b>To determine whether a product or service meets that requirement, first locate the corresponding test in Annex C</b>. 
      This is easily done as the tests in Annex C are presented in ascending order. 
      Then, test the product or service by following the procedure defined in the test. 
      The result section explains how to determine whether the procedure results in a pass or a fail.
      </Typography>

      <Typography variant="subtitle1" color="primary">How To Conform To The Standard</Typography>
      <Typography paragraph>
      <b>To claim a product or service conforms to the standard, it must result in a pass for all the applicable requirements.</b>
      </Typography>

      <Typography variant="subtitle1" color="primary">An Example</Typography>
      <Typography paragraph>
      As an example, imagine I am writing a monthly newsletter for staff and students at a public university in Europe.
      I then identify all the requirements that apply to this non-web document, one of which is <i className='inpracticeColor'>requirement 10.1.4.1</i> on the use of color.
      </Typography>

      <Typography paragraph>
      I then turn to Annex C and locate the test for <i className='inpracticeColor'>requirement 10.1.4.1</i>. 
      The pre-condition is <i>”The ICT is a non-web document”</i> which confirms this requirement does apply to the newsletter. 
      To determine whether it passes the test, I follow the procedure: 
      <i>”Check that the document does not fail WCAG 2.1 <i className='inpracticeColor'>Success Criterion 1.4.1</i> Use of Color”.</i>
      </Typography>

      <Typography paragraph>
      After clicking on the link in the procedure, I find out the WCAG 2.1 <i className='inpracticeColor'>Success Criterion 1.4.1</i>: 
      <i>”Color is not used as the only visual means of conveying information,
      indicating an action, prompting a response, or distinguishing a visual element”</i>. 
       I test my newsletter against this Success Criterion.
      </Typography>

      <Typography paragraph>
      I use the result part of <i className='inpracticeColor'>test 10.1.4.1</i> in the standard to determine whether the requirement is satisfied or not.
      <br/>
      In this case, if <i className='inpracticeColor'>Success Criterion 1.4.1</i> from WCAG is true for the newsletter, then the newsletter satisfies <i className='inpracticeColor'>requirement 10.1.4.1</i> of the EN 301 549 standard.
      <br/>
      If <i className='inpracticeColor'>Success Criterion 1.4.1</i>  from WCAG is false for the newsletter, then the newsletter does not satisfy <i className='inpracticeColor'>requirement 10.1.4.1</i> of the EN 301 549 standard.
      </Typography>

      <Typography variant="subtitle1" color="primary">Note</Typography>
      <Typography paragraph>
      Chapter 14 on Conformance of the standard gives a good explanation of 
      how to determine whether a product or service meets a requirement. 
      This page attempted to rephrase and summarize that chapter.
      </Typography>
      
    </Container>
  )
}
