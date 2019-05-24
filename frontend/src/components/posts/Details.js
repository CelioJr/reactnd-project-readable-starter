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
    const { comments, notFound } = this.props

    if(notFound === true){
      return <h1 style={{margin: '10%'}}>POST NOT FOUND</h1>
    }
    if (comments === undefined) {
      return <div>Loading</div>
    }

    

    return (
      <Grid item container spacing={16} style={{ marginLeft: '6%', marginTop: '2%', marginBottom: '5%' }}>
        <Grid item xs={10}>
          <CardPost id={postId} />
        </Grid>
        <Grid container item xs={10}>
          <Comments comments={comments} postId={postId} />
        </Grid>
      </Grid>
    )
  }
}

function mapsStatetoProps({ comments, posts }, { match }) {

  const { postId } = match.params
  const notFound = posts[postId] === undefined ? true : false

  return {
    comments: comments[postId],
    notFound
  }
}
export default connect(mapsStatetoProps, { receiveComments, UpDownVoteScore })(Details)