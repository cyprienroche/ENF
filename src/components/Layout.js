import React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { allItems, furtherItems, inpracticeItems, introItems, menuItems, overviewItems } from './MenuItems';
import { Typography } from '@mui/material';

const drawerWidth = 270; //240

const selectedPageStyle = (section) => {
  return {
    bgcolor: section.color.dark,
    color: 'white',
    '&:hover': {
      bgcolor: section.color.light,
      color: 'black',
    },
    // 'text-decoration': 'underline',
    }
  }

export default function Layout({ children }) {

  const navigate = useNavigate();
  const location = useLocation();
  const selectedColor = '#e1f5fe';

  return (
    <Box sx={{ display: 'flex' }}>
        {/* side drawer */}
        <Drawer 
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
            {/* <Typography variant="h5" noWrap component="div" onClick={() => navigate('/')}>
                 ENF
            </Typography> */}
                <Button
                  aria-label="home"
                  onClick={() => navigate('/')}
                  sx = {{
                    fontSize: 30,
                    width: '100%',
                    color: 'primary.main'
                  }}
                >
                ENF
                </Button>
            <Divider />

            {/* list / links */}
            <List>
              {allItems.map(section => (
                <List>
                  <ListItem>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={() => {return {'color': section.color.main}}}
                    >
                      {section.text}
                    </Typography>
                  </ListItem>
                  {section.subsections.map(subsection => (
                    <ListItem
                     button
                     key={subsection.text}
                     onClick={() => navigate(subsection.path)}
                     sx = {location.pathname == subsection.path ? selectedPageStyle(section) : null}
                    >
                      <ListItemText primary={subsection.text} />
                    </ListItem>
                  ))}
                </List>
              ))}
            </List>
            
        </Drawer>

        <Box sx={{ width: '100%' }}>
            {children}
        </Box>
    </Box>
  )
}
