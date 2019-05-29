import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import CommentItem from './CommentItem';
import FormComment from './FormComment';

export default class Comments extends Component {
  render() {
    const { comments, postId } = this.props

    if (comments === undefined) {
      return <div>Loading</div>
    }

    return (
      <Grid container item xs={10}>
        <Grid item xs={12}>
          <FormComment postId={postId}/>
        </Grid>
        {comments.map(comment => {
          // if(comment.deleted === false) {return }
          return <CommentItem key={comment.id} comment={comment} />
        }
        )}
      </Grid>
    )
  }
}
