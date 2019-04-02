import React, { Component } from 'react'
import './Sidebar.css'
import icons from '../../resources/sprite.svg'


const Icon = (props) => {
  return (
    <svg className="side-nav__icon">
      <use xlinkHref={`${icons}#icon-${props.name}`}></use>
    </svg>
  )
}

export default class Sidebar extends Component {

  render() {
    return (
      <nav className='sidebar'>
        <ul className='side-nav'>
          <li className="side-nav__item"> {/* eslint-disable-next-line */} 
            <a href='#' className="side-nav__link"> 
              <Icon name='udacity'/>
              <span>Udacity</span>
            </a>
          </li>
          <li className="side-nav__item"> {/* eslint-disable-next-line */} 
            <a href='#' className="side-nav__link">  
              <Icon name='react'/>
              <span>react</span>
            </a>
          </li>
          <li className="side-nav__item">  {/* eslint-disable-next-line */} 
            <a href='#' className="side-nav__link"> 
              <Icon name='redux'/>
              <span>redux</span>
            </a>
          </li>
        </ul>
      </nav >
    )
  }
}
