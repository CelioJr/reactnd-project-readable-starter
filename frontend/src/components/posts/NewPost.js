import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const styles = {
  paper: {
    flexGrow: 1,
    margin: '2%',
    padding: '2%',
  }
}

export default class NewPost extends Component {
  render() {
    return (
      <div style={{flexGrow: 1}}>
      <Grid
        container
        spacing={24}
        direction='row'
      >
        <Grid 
          item
          container
          xs={12}
        > 
          <Paper style={styles.paper}>
            <h1>TESTE</h1>
          </Paper>
        </Grid>
      </Grid>
      </div>
    )
  }
}
