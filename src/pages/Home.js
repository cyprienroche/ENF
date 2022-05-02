import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { menuItems } from '../components/MenuItems'

export default function Home() {
  return (
    <Container>
      <Typography
        variant="h2" 
        color="primary"
        component="h1"
        gutterBottom
      >
        Understanding the EN 301 549 standard
      </Typography>

      {/* <List>
        {menuItems.map(item => (
          <ListItem
          key={item.text}
          onClick={() => navigate(item.path)}
          >
          <ListItemText primary={item.text} />
        </ListItem>
        ))}
      </List> */}

    </Container>
  )
}
