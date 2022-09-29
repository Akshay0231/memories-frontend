import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.svg'
import useStyles from './styles'

function App() {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()

  useEffect(() => {
    dispatch(getPosts())
  // }, [])
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} style={{ flexDirection: 'row' }} position="static" color="inherit">
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts
                // currentId={currentId} 
                setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
