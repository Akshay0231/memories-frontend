import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles()
  const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" })

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const handleSubmit = (e) => {
    // console.log('submit clicked')
    e.preventDefault()
    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  const clear = () => {
    console.log('clear clicked ')
    setCurrentId(null)
    setPostData({ creator: "", title: "", message: "", tags: "", selectedFile: "" })
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField name='creator' variant='outlined' label="Creator" fullWidth
          value={postData.creator} onChange={event => setPostData({ ...postData, creator: event.target.value })}
        />
        <TextField name='title' variant='outlined' label="Title" fullWidth
          value={postData.title} onChange={event => setPostData({ ...postData, title: event.target.value })}
        />
        <TextField name='message' variant='outlined' label="Message" fullWidth
          value={postData.message} onChange={event => setPostData({ ...postData, message: event.target.value })}
        />
        <TextField name='tags' variant='outlined' label="Tags" fullWidth
          value={postData.tags} onChange={event => setPostData({ ...postData, tags: event.target.value.split(',') })}
        />
        <div className={classes.fileInput}>
          <FileBase
            key={postData.selectedFile || ''}
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button className={classes.buttonSubmit}
          disabled={!(postData.creator && postData.title && postData.message && postData.tags && postData.selectedFile)}
          variant="contained" color="primary" size="large" type="submit"
          fullWidth
        >
          {currentId ? 'Update' : 'Create'}
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Reset
        </Button>
      </form>
    </Paper >
  )
}

export default Form