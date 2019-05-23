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

class FormPost extends Component {

  state = {
    category: ''
  }

  componentDidMount() {
    const { edit, post } = this.props

    if (edit) {
      if (post !== undefined) {
        this.setState({
          id: post.id,
          timestamp: post.timestamp,
          title: post.title,
          author: post.author,
          body: post.body,
          category: post.category
        })
      }
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {

    const { categories, title } = this.props;

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
            <Paper style={styles.paper} onSubmit={this.props.onSubmit}>
              <form noValidate style={styles.container}>
                <Grid item container spacing={16}>
                  <Grid item xs={12}>
                    <h3>{title}</h3>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="title"
                      label="Title"
                      style={styles.textField}
                      value={this.state.title}
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
                      value={this.state.author}
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
                      value={this.state.body}
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
                        style={{ textDecoration: 'none' }}
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

function mapsStatetoProps({ categories }) {
  return {
    categories,
  }
}

export default connect(mapsStatetoProps)(FormPost)