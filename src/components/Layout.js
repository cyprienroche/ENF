import React from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';


const drawerWidth = 240;

export default function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
        {/* app bar */}

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
            <Toolbar>
                <Typography variant="h5" noWrap component="div">
                 ENF
                </Typography>
            </Toolbar>
            <Divider />
        </Drawer>

        <div style={{ width: '100%' }}>
            {children}
        </div>
    </Box>
  )
}
