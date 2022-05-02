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

  function createData(year, description) {
    return { year, description };
  }

  const rows = [
    createData(2005, 'The European Commission issues Mandate M376 which initiates the development of the EN 301 549 standard'),
    createData(2014, 'EN 301 549 v1.1.1 - the first version of the standard - is published'),
    createData(2018, 'EN 301 549 v2.1.2 is published and harmonized'),
    createData(2021, 'EN 301 549 v3.2.1 is published and harmonized'),
  ];

export default function History() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        A brief history
      </Typography>

      <Typography>
      The following table shows a brief history of the standard, beginning with Mandate M376 which resulted in the creation of the standard.
      </Typography>

      <TableContainer component={Paper} sx={{ margin: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="History of the EN 301 549 standard from 2005 to 2021">
        <TableHead>
          <TableRow>
            <TableCell>Year</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.year}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.year}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Typography paragraph>
      A harmonized standard is a standard which was created to support the law. In this case, to support the Directive (EU) 2016/2102 of the European Union.
    </Typography>
    
    </Container>
  )
}
