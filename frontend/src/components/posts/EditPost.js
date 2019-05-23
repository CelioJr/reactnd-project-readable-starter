import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormPost from './FormPost';

class EditPost extends Component {

  handleSubmit(e) {
    e.preventDefault()
    console.log('submit edit')
  }

  render() {

    const { post } = this.props

    if (post !== undefined) {

      return (
        <FormPost
          title={'Edit Post'}
          post={post}
          edit
          onSubmit={this.handleSubmit}
        />
      )
    }

    return (<div>Loading</div>)
  }
}



function mapsStatetoProps({ posts }, { match }) {
  const { postId } = match.params

  return {
    post: posts[postId],
  }
}

export default connect(mapsStatetoProps)(EditPost)