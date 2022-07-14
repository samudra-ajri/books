import { Typography } from "@mui/material"
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
    </>
  )
}

export default Home