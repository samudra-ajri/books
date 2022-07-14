import { CircularProgress, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MediaCard from '../components/MediaCard'
import SearchBar from '../components/SearchBar'
import { reset } from '../features/favorites/favoriteSlice'

function Home() {
  const dispatch = useDispatch()
  const { books, isLoading, isSuccess } = useSelector((state) => state.books)
  const foundBooks = isSuccess ? books.items : []

  const { isError, message } = useSelector((state) => state.favoriteBooks)

  useEffect(() => {
    if (isError) toast.error(message)
    dispatch(reset())
  }, [isError, message, dispatch])

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
            <MediaCard 
              key={book.id}
              page='home'
              book={{
                googleBookId: book.id,
                title: book.volumeInfo.title,
                averageRating: book.volumeInfo.averageRating,
                ratingsCount: book.volumeInfo.ratingsCount,
                thumbnail: book.volumeInfo.imageLinks?.thumbnail,
                authors: book.volumeInfo.authors
              }}
            />
          )}
        </Grid>
      )}
    </>
  )
}

export default Home