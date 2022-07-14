import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MediaCard from '../components/MediaCard'
import { getFavoriteBooks, reset } from '../features/favorites/favoriteSlice'

function Favorite() {
  const dispatch = useDispatch()
  const { books, isLoading } = useSelector((state) => state.favoriteBooks)

  useEffect(() => {
    dispatch(reset())
    dispatch(getFavoriteBooks())
  }, [dispatch])

  return (
    <>
      <Typography variant='h5' align='center' sx={{
        fontFamily: 'monospace',
        letterSpacing: '.3rem',
      }}>
        MY FAVORITE BOOKS
      </Typography>
      {isLoading ? (
        <Box paddingTop={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Grid container spacing={2} paddingTop={5} paddingBottom={10}>
          {books.map(book =>
            <MediaCard
              key={book._id}
              page='favorite'
              book={{
                id: book._id,
                title: book.title,
                averageRating: book.averageRating,
                ratingsCount: book.ratingsCount,
                thumbnail: book.thumbnail,
                authors: book.authors
              }}
            />
          )}
        </Grid>
      )}
    </>
  )
}

export default Favorite