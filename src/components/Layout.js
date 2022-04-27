import React from 'react'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'

export default function Layout({ children }) {
  return (
      <div>
        {/* app bar */}

        {/* side drawer */}
        <Drawer>
          <div>
              <Typography variant="h5">
                  Ninja Notes
              </Typography>
          </div>
        </Drawer>

        <div>
            {children}
        </div>
      </div>
  )
}
