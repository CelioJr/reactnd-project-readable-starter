import React, { Component } from 'react'
import './Main.css'
import Posts from '../posts/Posts'
import NewPost from '../posts/NewPost'
import {Route, withRouter, Switch} from 'react-router-dom'
import EditPost from '../posts/EditPost';
import Details from '../posts/Details';

class Main extends Component {
  render() {

    return (
      <div className='main'>
      <Switch>
        <Route path='/new' component={NewPost} />
        <Route path='/post/edit/:postId' component={EditPost} />
        <Route path='/:category/:postId' component={Details} />
        <Route path='/:category' component={Posts} />
        <Route path='/' component={Posts} />
      </Switch>
       
      </div>
    )
  }
}

export default withRouter(Main)
