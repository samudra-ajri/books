import { Grid, Typography } from "@mui/material"
import MediaCard from "../components/MediaCard"

function Favorite() {
  return (
    <>
      <Typography variant="h3" align="center" sx={{
        fontFamily: 'monospace',
        letterSpacing: '.3rem',
      }}>
        MY FAVORITE
      </Typography>
      <Grid container spacing={2} paddingTop={5} paddingBottom={10}>
        <MediaCard />
      </Grid>
    </>
  )
}

export default Favorite