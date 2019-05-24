import React, { Component } from 'react'

import { Grid, Card, TextField, Button} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addComment } from '../../actions/comments'
import {guid} from '../../utils/utils'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    flexGrow: 1,
    margin: '2%',
    padding: '2%',
  },
  textField: {
    marginLeft: '1%',
    marginRight: '1%',
    width: "100%",
  },
  dense: {
    marginTop: '19px',
  },
  menu: {
    width: '200px',
  },
};

class FormComment extends Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (e) =>  {
    e.preventDefault()
    const { post } = this.props
    const {body, author} = this.state

    const comment = {
      id: guid(),
      timestamp: Date.now(),
      author,
      body,
      parentId: post.id
    }

    if (body === "") {
      alert("fields are mandatory")
    } else {
      this.props.addComment(comment, post.id, () => this.props.history.push(`/${post.category}/${post.id}`))
    }
  }


  render() {
    return (
            <Card style={styles.paper} onSubmit={this.handleSubmit}>
              <form style={styles.container}>
                <Grid item container spacing={16}>
                  <Grid item xs={12}>
                    <h3>Add a Comment</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="author"
                      label="Author"
                      style={styles.textField}
                      margin="normal"
                      onChange={this.handleChange('author')}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="body"
                      label="Message"
                      style={styles.textField}
                      onChange={this.handleChange('body')}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                  <Grid item container direction="row" >
                    <Grid item xs={2}>
                      <Button type='submit' variant="contained" color="primary">
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Card>
    )
  }
}

function mapsStatetoProps({ posts }, { match }) {

  const { postId } = match.params
  const post = posts[postId]

  return {
    post
  }
}

export default withRouter(connect(mapsStatetoProps, { addComment })(FormComment))