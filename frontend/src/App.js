import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <div className='main'>
          <Sidebar/>
          <Content/>
        </div>
      </div>
    );
  }
}

export default App;
