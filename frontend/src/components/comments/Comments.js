import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import CommentItem from './CommentItem';



export default class Comments extends Component {
  render() {
    const { comments } = this.props

    console.log(this.props)

    if (comments === undefined) {
      return <div>Loading</div>
    }

    return (
      <Grid container item xs={10}>
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </Grid>
    )
  }
}
