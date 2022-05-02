import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function WCAG() {
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
      The Digital Accessibility Foundations Free Online Course provided by the World Wide Web Consortium (W3C),
      the organization responsible for the Web Content Accessibility Guidelines (WCAG). 
      It is a self-paced online course available on the edX platform.
      </Typography>
      
      <Typography paragraph>
      The course covers the following content:
      <ul>
        <li>What is Web Accessibility</li>
        <li>People and Digital Technology</li>
        <li>Business Case and Benefits</li>
        <li>Principles, Standards, and Checks</li>
        <li>Getting Started with Accessibility</li>
      </ul>
      </Typography>
      
      <Typography paragraph>
      This course is a helps you better understand WCAG, which the EN 301 549 standard references in chapters 9, 10, and 11.
      <br />
      To better understand the content of the EN 301 549 standard, it is beneficial to take this course and build a strong understanding of WCAG.
      </Typography>
      
    </Container>
  )
}
