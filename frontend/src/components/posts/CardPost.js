import React, { Component } from 'react'
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
// import { AccountCicle } from '@material-ui/icons'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class CardPost extends Component {
  render() {
    const { post } = this.props

    return (
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h6">
            {post.title}
          </Typography>
          <Typography variant="subtitle2" component="p">
              {/* <AccountCicle/>{`author: ${post.author}`} */}
          </Typography>
          <Typography variant="subtitle2" component="p">
              {`category: ${post.category}`}
          </Typography>
          <Typography variant="body1" component="p" style={{marginTop:'2%'}}>
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' target='_blank'>
            Edit
          </Button>
          <Button size='small' color='primary' target='_blank'>
           Delete
          </Button>
        </CardActions>
      </Card>
    )
  }
}

function mapStateToProps({posts},{id}){
  return {
    post: posts[id],
  }
}

export default withRouter(connect(mapStateToProps)(CardPost))