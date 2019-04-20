import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {
  render() {
      const { posts } = this.props

    return (
      <div>
          {JSON.stringify(posts)}
      </div>
    )
  }
}

function mapsStateToProps({ posts }) {
    return {
        posts
    }
}

export default connect(mapsStateToProps)(Posts)