import React from 'react';
import { Replay, Close, StarRate, Favorite, FlashOn } from '@mui/icons-material';
import './SwipeButtons.css';
import { IconButton } from '@mui/material';

function SwipeButtons() {
  return (
    <div className='swipe__buttons'>
        <IconButton className='swipe__buttons-repeat' >
        <Replay fontSize='large' />
        </IconButton>

        <IconButton className='swipe__buttons-left'>
        <Close fontSize='large' />
        </IconButton>
        
        <IconButton className='swipe__buttons-star'>
        <StarRate fontSize='large' />
        </IconButton>

        <IconButton className='swipe__buttons-right'>
        <Favorite fontSize='large' />
        </IconButton>

        <IconButton className='swipe__buttons-lighting'>
        <FlashOn fontSize='large' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons