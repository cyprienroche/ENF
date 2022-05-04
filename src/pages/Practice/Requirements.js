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
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { overviewItems } from '../../components/MenuItems';


function createData(count, method, explanation) {
  return { count, method, explanation };
}


const rows = [
  createData(1, 'The Standard', 'This is by far the longest and most tedious approach. It consists going through each chapter and reading each requirement'),
  createData(2, 'Annex C', 'This approach consists of going through each pre-condition of each table of Annex C'),
  createData(3, 'The Decision Tree', 'This is the fastest approach. The requirements that apply are automatically identified after answering 37 questions about the product or service'),
  createData(4, 'Annex A', 'In the case where the product or service is a website or mobile application built for the public sector'),
];

export default function Requirements() {
  const navigate = useNavigate();

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
      This page proposes 4 approaches to determining which requirements apply to a given produict or service. 
      </Typography>

      <Typography variant="subtitle1" color="primary">The Approaches</Typography>

      <Typography paragraph>
      The table below proposes 4 approaches to determining which requirements apply to a given produict or service. 
      They are then explained in more details below the table, and are used on an example ICT product: a thermostat.
      </Typography>

      <TableContainer component={Paper} sx={{ margin: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="Approaches to determining which requirements apply to a given ICT: the standard, Annex C, the decision tree, or Annex A.">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>The method</TableCell>
            <TableCell>Explanation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.year}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.count}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>{row.explanation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           
      <Typography variant="subtitle1" color="primary">A Scenario For The Example</Typography>
      <Typography paragraph>
      As an example, imagine I am building an office thermostat controller for a European public hospital. 
      Note that <b>it is not possible to attach assistive products to the thermostat controller</b>. 
      <i> For example</i>, a blind person would not be able to install a screen reader on the thermostat controller. 
      Therefore, <b className='inpracticeColor'>it has closed functionality</b>.
      </Typography>
      
      <Typography variant="subtitle1" color="primary">The Standard Approach</Typography>
      <Typography variant="subtitle2" color="primary">A Bit Of Theory First</Typography>
      <Typography paragraph>
      To use the first approach, it is essential to understand how the requirements are formulated. 
      All the requirements consist of two parts; 
      a pre-condition and the requirement, and are written in the form <i>”Where ICT &lt;pre-condition&gt;, it shall provide &lt;requirement&gt;”</i>.
      <br/>
      If the first part is <i>true</i>, the ICT must meet the requirement. 
      <br />
      If the first part is <i>not true</i>, then the requirement is not applicable. 
      <br />
      The pre-conditions of every requirements are presented in Annex C.
      </Typography>

      <Typography variant="subtitle2" color="primary">Applying The Theory To The Example</Typography>
      <Typography paragraph>
      Using the standard approach, I would turn to chapter 5 and start reading. 
      Eventually I would read the following: 5.1.2.2 <i>“Where ICT has closed functionality, ...”</i>. 
      <br />
      Since the thermostat controller has closed functionality, then I know it must meet requirement 5.1.2.2. 
      <br />
      I record it on a side note and continue reading.
      </Typography>

      <Typography variant="subtitle1" color="primary">The Annex C Approach</Typography>
      <Typography paragraph>
      Using the Annex C approach, I would turn to Annex C read the pre-condition of C5.1.2.2: <i>“The ICT has closed functionality”</i>.
      <br />
      It is true, so I know the product must meet requirement 5.1.2.2. 
      <br />
      I record it on a side note and continue parsing the pre-conditions of the tables of Annex C.
      </Typography>

      <Typography variant="subtitle1" color="primary">The Decision Tree Approach</Typography>
      <Typography paragraph>
      Using the decision tree approach, I would answer question 1: <i>“Does the ICT system have closed functionality?”</i>.
      <br />
      The answer is yes, so I know the thermostat controller must meet requirement 5.1.2.2. 
      But just by answering question 1, I also know it must meet requirements 5.1.2.1 and 5.1.3.16 and 5.1.4 and 5.1.5 and 5.1.7.
      <br /> 
      I record that on a side note and continue answering the questions of the decision tree.
      <br />
      To find out more about the decision tree visit the <Link to="/ENF/decision-tree">decision tree</Link> page.
      </Typography>

      <Typography variant="subtitle1" color="primary">The Annex A Approach</Typography>
      <Typography paragraph>
      Annex A is a good approach when the product or service must conform to Directive (EU) 2016/2102 of the European Union. 
      Annex A defines the essential requirements the product or service must satisfy to comply with the directive. 
      <br />
      To know which products and services must comply with the directive, use the <Link to='/ENF/conform'>Products and services that must conform to the standard</Link> page.
      </Typography>
      
      <Typography paragraph>
      In this example, it is not possible to use Annex A since the thermostat controller is not a website nor a mobile application.
      </Typography>
      
    </Container>
  )
}
