import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Conform() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Products and services that must conform to the standard
      </Typography>

      <Typography paragraph>
        This page describes the products and services that must conform to the standard.
      </Typography>

      <Typography variant="subtitle1" color="primary">The Public Sector</Typography>
      
      <Typography paragraph>
      Because to the Directive (EU) 2016/2102 of the European Union, 
      <b> all websites and mobile applications of public sector bodies must conform to the EN 301 549 standard</b>. With the exception of the following:
      </Typography>
      
      <Typography>
      <ul>
        <li>Websites and mobile applications of public broadcasters</li>
        <li>Websites and mobile applications of NGOs that do not provide services that are essential to the public</li>
        <li>Live streaming</li>
        <li>Offce file formats published before 23 September 2018</li>
        <li>Online maps</li>
        <li>Third party content that is not under control of the public sector bodies</li>
      </ul>
      </Typography>
      
      <Typography variant="subtitle1" color="primary">The Private Sector</Typography>

      <Typography paragraph>
      Because of the Directive (EU) 2019/882 of the European Union,
      <b> the following products and services will have to conform to the EN 301 549 standard <i>by 2025</i></b>, 
      regardless of whether they are in the public or private sector:
      </Typography>
      
      <Typography>
      <ul>
        <li>Computers and operating systems</li>
        <li>ATMs, ticketing and check-in machines</li>
        <li>Telephones and smartphones</li>
        <li>TV equipment related to digital television services</li>
        <li>Telephony services and related equipment</li>
        <li>Audiovisual media services, such as television broadcast and related consumer equipment</li>
        <li>Services related to air, bus, rail and waterborne passenger transport</li>
        <li>Banking services</li>
        <li>E-books</li>
        <li>E-commerce</li>
      </ul>
      </Typography>

    </Container>
  )
}
