import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Paper, TextField, Button} from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { handleUpdateComment } from '../../actions/comments'

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

class EditComment extends Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (e) =>  {
    e.preventDefault()
    const {postId, commentId} = this.props.match.params
    const { post } = this.props
    const body = e.target.body.value

    if (body === "") {
      alert("fields are mandatory")
    } else {
      this.props.handleUpdateComment(commentId, postId, Date.now(), body,
        () => this.props.history.push(`/${post.category}/${postId}`))
    }
  }


  render() {
    const { comment } = this.props
    return (
      <div style={{ flexGrow: 1 }}>
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
            <Paper style={styles.paper} onSubmit={this.handleSubmit}>
              <form style={styles.container}>
                <Grid item container spacing={16}>
                  <Grid item xs={12}>
                    <h3>Edit Comment</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="title"
                      label="Title"
                      disabled
                      defaultValue={comment.author}
                      style={styles.textField}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="body"
                      label="Message"
                      defaultValue={comment.body}
                      style={styles.textField}
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
                    <Grid item xs={2}>
                        <Button 
                          variant="contained" 
                          color="secondary"
                          onClick= {() => this.props.history.goBack()}
                          >
                          Cancel
                        </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div >

    )
  }
}
function mapsStatetoProps({ comments, posts }, { match }) {

  const { postId, commentId } = match.params
  const post = posts[postId]

  const comment = comments !== null ? comments[postId].filter(comment => comment.id === commentId) : null
  return {
    comment: comments !== null && { ...comment[0] },
    post
  }
}

export default withRouter(connect(mapsStatetoProps, { handleUpdateComment })(EditComment))