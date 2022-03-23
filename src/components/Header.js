import { ArrowBackIos, Forum, Person } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ backButton }) {

  const navigate = useNavigate();

  return (
    <div className='header' >

    { backButton ? (
      <IconButton onClick={() => navigate(backButton) } >
      <ArrowBackIos fontSize='large' className='header__icon' />
      </IconButton>
    ) : (
      <IconButton>
      <Person fontSize='large' className='header__icon' />
      </IconButton>
    ) }

       

        <Link to='/' >
        <img className='header__logo' src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder logo" />
        </Link>

        <Link to='/chat' >
        <IconButton>
        <Forum fontSize='large' className='header__icon' />
        </IconButton>
        </Link>
    </div>
  )
}

export default Header