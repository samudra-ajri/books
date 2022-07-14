import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid, Rating } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/BookmarkBorderRounded'

function MediaCard(props) {
  const title = props.book.volumeInfo.title
  const avgRating = props.book.volumeInfo.averageRating ?? 0
  const ratingsCount = props.book.volumeInfo.ratingsCount ?? 0
  const thumbnail = props.book.volumeInfo.imageLinks?.thumbnail ??
    'https://www.quenchhome.com/img/content/property_photographs/default.jpg'
  let authors = props.book.volumeInfo.authors ?? []

  if (authors.length > 3) authors = [authors[0], authors[1] + ', et al.']

  return (
    <Grid item>
      <Card sx={{ width: 200, height: 550 }}>
        <CardMedia
          component='img'
          height='300'
          image={thumbnail}
          alt={title}
        />
        <CardActions>
          <Button color='inherit'>
            <BookmarkIcon  fontSize='medium'/>
            <Typography variant='subtitle2'>Add To Favorite</Typography>
          </Button>
        </CardActions>
        <CardContent>
          <Grid item>
            <Rating name='half-rating-read' size='small' defaultValue={avgRating} precision={0.5} readOnly /> /{ratingsCount}
          </Grid>
          <Typography color='text.secondary' variant='body2'>
            {authors.map(author => <>{author} <br /></>)}
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

