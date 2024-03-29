import React from 'react'
import { useDispatch } from 'react-redux';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from './styles'
import moment from 'moment';
import defaultImage from '../../../images/default.jpg'
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch()

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || defaultImage} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button onClick={() => setCurrentId(post._id)}
          style={{ color: 'white' }} size="small">
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon />
          &nbsp; Like &nbsp; {post.likeCount}
        </Button>
        <Button size='small' color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card >
  )
}

export default Post