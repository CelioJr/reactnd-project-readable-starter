import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { handleUpdatePost } from '../../actions/posts'

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
  }
};
class EditPost extends Component {

  handleSubmit = (e) =>  {
    e.preventDefault()
    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value

    if (body === "" || title === "") {
      alert("fields are mandatory")
    } else {
      this.props.handleUpdatePost(postId, title, body,
        () => this.props.history.push('/'))
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {

    const { post } = this.props

    if (post === undefined) {
      return <div>Loading</div>
    }

      return (
        <Paper style={styles.paper} onSubmit={this.handleSubmit}>
          <form noValidate style={styles.container}>
            <Grid item container spacing={16}>
              <Grid item xs={12}>
                <h3>Edit Post</h3>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="title"
                  label="Title"
                  defaultValue={post.title}
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
                  defaultValue={post.body}
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
                  <Link  to={'/'} style={{ textDecoration: 'none' }} >
                    <Button variant="contained" color="secondary">
                      Cancel
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      )
    }
}


function mapsStatetoProps({ posts }, { match }) {
  const { postId } = match.params

  return {
    post: posts[postId],
  }
}

export default connect(mapsStatetoProps, { handleUpdatePost })(EditPost)