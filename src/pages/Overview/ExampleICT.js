import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(chapter, title, example) {
  return { chapter, title, example };
}

const rows = [
  createData(5, 'Generic requirements', 'A self service kiosk to order food yourself at a fast food restaurant'),
  createData(6, 'ICT with two-way voice communication','A door entry phone where one person speaks and another answers'),
  createData(7, 'ICT with video capabilities','A streaming service to watch TV shows and movies'),
  createData(8, 'Hardware','An Automated Teller Machine (ATM) to withdraw cash'),
  createData(9, 'Web','A website to keep up to date with any changes to public transport routes'),
  createData(10, 'Non-web documents','A text document describing a contract between two parties to buy or rent a home'),
  createData(11, 'Software','A weather mobile application to know if it will rain later in the day'),
  createData(12, 'Documentation and support services','Contacting a help desk to get assist with a technical problem'),
  createData(13, 'ICT providing relay or emergency services','Calling an Emergency Notification System to notify them of a large fire'),
];


export default function ExampleICT() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Example ICT for which the chapters apply
      </Typography>

      <Typography paragraph>
      This page focuses on chapters 5 to 13 and gives example products and services for which the standard applies. 
      </Typography>

      <Typography variant="subtitle1" color="primary">The Idea</Typography>
      <Typography paragraph>
      The table below focuses on <b>chapters 5 to 13</b>, which are the <b>technical requirements</b> of the standard. 
      The table contains one example ICT product or service for every chapter from 5 to 13. 
      <b className='overviewColor'> In any given row, the chapter of that row applies to the example of that row. </b>
      However, note that a chapter is not limited to its example, it might apply to more than one example ICT. 
      </Typography>

      <Typography variant="subtitle1" color="primary">The Examples</Typography>
      <TableContainer component={Paper} sx={{ margin: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="Example ICT for which the chapters apply">
        <TableHead>
          <TableRow>
            <TableCell>Chapter</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Example ICT for which the chapter applies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.chapter}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.chapter}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.example}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Typography variant="subtitle1" color="primary">In More Details</Typography>
    <Typography paragraph>
      Chapter 5 applies to closed functionality technology. Closed functionality means the user cannot attach assistive products.
      For example, if someone with limited vision cannot attach a screen reader to the ICT,
      then that ICT is considered to have closed functionality.
      </Typography>
      
      <Typography paragraph>
      Chapter 10 refers to digital documents that are not web pages such as spreadsheets, presentations, user manuals, or newsletters.
      </Typography>
      
    </Container>
  )
}
