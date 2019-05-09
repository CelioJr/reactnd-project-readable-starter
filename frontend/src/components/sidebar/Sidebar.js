import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import icons from '../../resources/sprite.svg'



const Icon = (props) => {
  return (
    <svg className="side-nav__icon">
      <use xlinkHref={`${icons}#icon-${props.name}`}></use>
    </svg>
  )
}

class Sidebar extends Component {

  state = {
    navActive: 'all'
  }

  setActiveClass(path) {
    this.setState({
      navActive: path
    })  
  }
  

  render() {
    const { categories } = this.props;
    const { navActive } = this.state;

    return (
      <nav className='sidebar'>
        <ul className='side-nav'>
          {categories.length > 0 && categories.map(category => (
             <li 
              key={category.name} 
              className={"side-nav__item " + (category.path === navActive 
                ? 'side-nav__item--active'
                : '')  }> 
              <NavLink
               to={`/${category.path}`}
               className='side-nav__link' 
               onClick={() => this.setActiveClass(category.path)}>
                <Icon name={category.name}/>
                <span>{category.name}</span>
              </NavLink>
           </li>
          ))}  
        </ul>
        <div className="legal">
            by Célio Junior
        </div>
      </nav >
    )
  }
}

function mapsStatetoProps({categories}, props){
  return {
    categories,
  }
}

export default connect(mapsStatetoProps)(Sidebar)