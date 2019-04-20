import React, { Component } from 'react'
import './Main.css'
import Posts from '../posts/Posts'
import {Route, withRouter, Switch} from 'react-router-dom'

class Main extends Component {
  render() {

    return (
      <div className='main'>
      <Switch>
        <Route path='/:category' component={Posts} />
        <Route path='/' component={Posts} />
      </Switch>
       
      </div>
    )
  }
}

export default withRouter(Main)