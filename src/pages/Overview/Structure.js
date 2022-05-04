import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Structure() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        The structure of the standard
      </Typography>

      <Typography paragraph>
        This pages describes the way in which the standard organizes its content: by functions or characteristics. 
      </Typography>

      <Typography variant="subtitle1" color="primary">The Idea</Typography>
      <Typography paragraph>
      <b>The EN 301 549 standard is written to apply to <i>any</i> ICT product or service</b>. 
      It is designed to be very generic. 
      The standard covers smartphones and computers but also other ICT devices such as ticket machines selling metro tickets.
      </Typography>
      
      <Typography variant="subtitle1" color="primary">An Example</Typography>
      <Typography paragraph>
      Let us consider a smartphone. In the standard, there is no one chapter that defines all the accessibility requirements for that smartphone.
      Instead, multiple chapters spread across the standard apply to the smartphone, depending on its characteristics.
      </Typography>

      <Typography paragraph>
      Since people can speak to each other through the smartphone, one of the functions of the smartphone is enabling two-way voice communication 
      - people can communicate through the smartphone by voice.
      Therefore, the smartphone would need to satisfy the requirements of the two-way voice communication chapter of the standard.
      </Typography>
      
      <Typography paragraph>
      Since people can also interact with the smartphone by clicking on its screen, the smartphone contains software.
      Software is one of the characteristics of the smartphone.
      Therefore, the smartphone would also need to satisfy the requirements of the software chapter of the standard.
      </Typography>
      
      <Typography variant="subtitle1" color="primary">In Conclusion</Typography>
      <Typography paragraph>
      The standard follows a “functional approach” to Information and Communication Technologies (ICT). 
      Simply put, <b>the requirements are organized by functions or characteristics</b> as opposed to commercial categories.
      <br/>
      So instead of having a chapter defining all the requirements for smartphones, 
      there is a two-way voice communication chapter and a software chapter, and so forth.
      Multiple chapters apply to the smartphone. 
      The chapters that apply depend on the functions and characteristics of the ICT product or service.
      </Typography>
      
    </Container>
  )
}
