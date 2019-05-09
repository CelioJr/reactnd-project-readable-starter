import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router } from 'react-router-dom'
import { handleInitialData } from '../actions/shared';

class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {

    return (
      <Router>
        <Fragment>
          <LoadingBar style={{ height: '10px' }} />
          {this.props.loading === true
            ? null
            : <div className='app'>
              <Header />
              <div className='container'>
                <Sidebar />
                <Main />
              </div>
            </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapsStateToProps({ categories }) {
  return {
    loading: categories === undefined
  }
}

export default connect(mapsStateToProps, { handleInitialData })(App);
