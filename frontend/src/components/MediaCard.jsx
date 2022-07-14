import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Grid, Rating } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/BookmarkBorderRounded'

function MediaCard() {
  return (
    <Grid item>
      <Card sx={{ width: 160, height: 450 }}>
        <CardMedia
          component="img"
          height="232"
          image="http://books.google.com/books/content?id=IX3DDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt="Belajar Bahasa Korea dengan Mudah"
        />
        <CardContent >
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
          <Typography color="text.secondary" variant='body2'>
            Asfara
          </Typography>
          <Typography variant='body1'>
            Belajar Bahasa Korea dengan Mudah
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button color='inherit'>
            <BookmarkIcon fontSize="medium" />
            <Typography variant="subtitle2">Add Favorite</Typography>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MediaCard

