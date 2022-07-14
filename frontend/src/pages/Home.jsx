import { CircularProgress, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import MediaCard from '../components/MediaCard'
import SearchBar from '../components/SearchBar'

function Home() {
  const { books, isLoading, isSuccess } = useSelector((state) => state.books)
  const foundBooks = isSuccess ? books.items : []

  return (
    <>
      <Typography variant='h3' align='center' sx={{
        fontFamily: 'monospace',
        letterSpacing: '.3rem',
      }}>
        BOOKS
      </Typography>
      <SearchBar />
      {isLoading ? (
        <Box paddingTop={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Grid container spacing={2} paddingTop={5} paddingBottom={10}>
          {foundBooks.map(book => 
            <MediaCard key={book.id} book={book}/>
          )}
        </Grid>
      )}
    </>
  )
}

export default Home