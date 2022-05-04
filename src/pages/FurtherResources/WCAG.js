import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';


export default function WCAG() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        WCAG free online course
      </Typography>

      <Typography paragraph>
      The <a href="https://www.edx.org/course/web-accessibility-introduction">Introduction to Web Accessibility free online course</a> is provided by the World Wide Web Consortium (W3C),
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
      <b className='furtherColor'>This course helps you better understand WCAG, which the EN 301 549 standard references in chapters 9, 10, and 11.</b>
      <br />
      To better understand the content of the EN 301 549 standard, it is beneficial to take this course and build a strong understanding of WCAG.
      </Typography>

      <Box textAlign='center'>
          <Button 
            onClick={() => {alert('WCAG Online Course not linked yet')}}
            color="primary" 
            variant="contained"
            href="#decision-tree"
            sx = {{margin: 3}}
          >
            Go to the free WCAG online course
          </Button>
      </Box>
      
    </Container>
  )
}
