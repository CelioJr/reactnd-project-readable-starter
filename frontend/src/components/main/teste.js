import React, { Component } from 'react'

export default class teste extends Component {
  render() {
    console.log('url -->', this.props)

    return (
      <div>
        {JSON.stringify(this.props)}
      </div>
    )
  }
}
