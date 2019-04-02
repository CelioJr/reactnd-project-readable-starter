import React from 'react'
import logo from '../resources/logo.png'
import './Header.css'


const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="trillo logo" className="logo"></img>
            <span>Leitura</span>
        </header>
    )
}

export default Header