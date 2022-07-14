import { Grid, Typography } from "@mui/material"
import MediaCard from "../components/MediaCard"
import SearchBar from "../components/SearchBar"

function Home() {
  return (
    <>
      <Typography variant="h3" align="center" sx={{
        fontFamily: 'monospace',
        letterSpacing: '.3rem',
      }}>
        BOOKS
      </Typography>
      <SearchBar />
      <Grid container spacing={2} paddingTop={5} paddingBottom={10}>
        <MediaCard />
      </Grid>
    </>
  )
}

export default Home