import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Box sx={{ pt: 15 }}>
        <AppBar color='default'>
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              BOOKS
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button component={Link} to="/" sx={{ my: 2, color: 'inherit', display: 'block' }}> Home </Button>
              <Button component={Link} to="/favorites" sx={{ my: 2, color: 'inherit', display: 'block' }}> Favorite </Button>
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
