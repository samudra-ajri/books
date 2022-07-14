import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid, Rating } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/BookmarkBorderRounded'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { createFavoriteBooks, deleteFavoriteBook } from '../features/favorites/favoriteSlice'

function MediaCard(props) {
  const dispatch = useDispatch()
  const id = props.book.id
  const title = props.book.title
  const avgRating = props.book.averageRating ?? 0
  const ratingsCount = props.book.ratingsCount ?? 0
  const thumbnail = props.book.thumbnail ??
    'https://www.quenchhome.com/img/content/property_photographs/default.jpg'
  const page = props.page
  let authors = props.book.authors ?? []
  if (authors.length > 2) authors = [authors[0], authors[1] + ', et al.']

  const addFavorite = () => {
    dispatch(createFavoriteBooks(props.book))
  }

  const removeFavorite = () => {
    dispatch(deleteFavoriteBook(id))
  }

  return (
    <Grid item>
      <Card sx={{ width: 200, height: 500 }}>
        <CardMedia
          component='img'
          height='300'
          image={thumbnail}
          alt={title}
        />
        <CardActions>
          {page === 'home' ? (
            <Button color='inherit' onClick={addFavorite}>
              <BookmarkIcon fontSize='medium' />
              <Typography variant='subtitle2'>Add To Favorite</Typography>
            </Button>
          ) : (
            <Button color='inherit' onClick={removeFavorite}>
              <BookmarkIcon fontSize='medium' />
              <Typography variant='subtitle2'>Remove Favorite</Typography>
            </Button>
          )}
        </CardActions>
        <CardContent>
          <Grid item>
            <Rating name='half-rating-read' size='small' defaultValue={avgRating} precision={0.5} readOnly /> /{ratingsCount}
          </Grid>
          <Typography color='text.secondary' variant='body2'>
            {authors.map(author =>
              <Fragment key={author}>
                {author} <br />
              </Fragment>
            )}
          </Typography>
          <Typography variant='body1'>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default MediaCard

