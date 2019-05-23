import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import logo from '../../resources/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <Grid container
        direction='row'
        spacing={24}
        alignItems="center"
      >
        <Grid item xs={10} >
          <Link
            to={'/'}
          >
            <img src={logo} alt="trillo logo" className="logo"></img>
            <span>READABLE</span>
          </Link>
        </Grid>
        <Grid item>
          <Link
            to={'/new'}
            style={{textDecoration: 'none'}}
          >
            <Button variant="contained" color="primary">
              New Post
            </Button>
          </Link>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header