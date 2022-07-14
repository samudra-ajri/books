import { Grid, Typography } from '@mui/material'
import MediaCard from '../components/MediaCard'

function Favorite() {
  return (
    <>
      <Typography variant='h5' align='center' sx={{
        fontFamily: 'monospace',
        letterSpacing: '.3rem',
      }}>
        MY FAVORITE BOOKS
      </Typography>
      <Grid container spacing={2} paddingTop={5} paddingBottom={10}>
        <MediaCard />
      </Grid>
    </>
  )
}

export default Favorite