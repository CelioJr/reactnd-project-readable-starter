import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import CardPost from './CardPost'
import { receiveComments } from '../../actions/comments'
import { UpDownVoteScore } from '../../actions/posts'
import Comments from '../comments/Comments';

class Details extends Component {

  componentDidMount() {
    const { postId } = this.props.match.params

    this.props.receiveComments(postId)
  }

  render() {

    const { postId } = this.props.match.params
    const { comments } = this.props

    if (comments === undefined) {
      return <div>Loading</div>
    }

    return (
      <Grid item container spacing={16} style={{ marginLeft: '6%', marginTop: '2%' }}>
        <Grid item xs={10}>
          <CardPost id={postId} />
        </Grid>
        <Grid container item xs={10}>
          <Comments comments={comments} />
        </Grid>
      </Grid>
    )
  }
}

function mapsStatetoProps({ comments }, { match }) {

  const { postId } = match.params

  return {
    comments: comments[postId]
  }
}
export default connect(mapsStatetoProps, { receiveComments, UpDownVoteScore })(Details)