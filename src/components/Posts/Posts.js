import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, CircularProgress } from '@mui/material'
import Post from './Post/Post'
import useStyles from './styles'

export const Posts = () => {
  const posts = useSelector((state) => state.posts)

  // console.log({ posts })
  const classes = useStyles()
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {
          posts.map(post => (
            <Grid key={post._id} item xs={12}>
              <Post post={post} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Posts