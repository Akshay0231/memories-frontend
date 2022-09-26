import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import memories from './images/memories.svg'

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
    </Container>
  );
}

export default App;
