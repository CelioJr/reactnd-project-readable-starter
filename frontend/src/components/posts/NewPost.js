import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

import { handleAddNewPost } from '../../actions/posts'


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

function guid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}
class NewPost extends Component {

  state = {
    category: ''
  }

  submitNewPost = (e) => {
    e.preventDefault()

    const { title, author, body, category } = this.state

    const post = {
      id: guid(),
      timestamp: Date.now(),
      title,
      author,
      body,
      category
    }

    console.log('posto', post)

    this.props.handleAddNewPost(post, () => this.props.history.push('/'))
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {

    const { categories } = this.props;

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
            <Paper style={styles.paper} onSubmit={this.submitNewPost}>
              <form style={styles.container}>
                <Grid item container spacing={16}>
                  <Grid item xs={12}>
                    <h3>Add a new Post</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="title"
                      label="Title"
                      style={styles.textField}
                      // value={this.state.name}
                      onChange={this.handleChange('title')}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="author"
                      label="Author"
                      style={styles.textField}
                      // value={this.state.name}
                      onChange={this.handleChange('author')}
                      margin="normal"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel style={{ marginRight: '2%' }} htmlFor="category">Category</InputLabel>
                    <Select
                      required
                      value={this.state.category}
                      onChange={this.handleChange('category')}
                      inputProps={{
                        name: 'category',
                        id: 'category',
                      }}
                    >
                      {categories.length > 0 && categories.map(category => (
                        <MenuItem key={`key-${category.name}`} value={category.name}>{category.name}</MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="body"
                      label="Message"
                      style={styles.textField}
                      // value={this.state.name}
                      onChange={this.handleChange('body')}
                      margin="normal"
                      multiline
                      fullWidth
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                  >
                    <Grid item xs={2}>
                        <Button type='submit' variant="contained" color="primary">
                          Send
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                      <NavLink
                        to={'/'}
                        style={{textDecoration: 'none'}}
                      >
                        <Button variant="contained" color="secondary">
                          Cancel
                        </Button>
                      </NavLink>
                    </Grid>
                  </Grid>
                </Grid>
              </form>

            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapsStatetoProps({ categories }, props) {
  return {
    categories,
  }
}

export default connect(mapsStatetoProps, { handleAddNewPost })(NewPost)