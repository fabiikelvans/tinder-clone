import { Avatar} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './Chat.css';

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
    <div className='chat'>
        <Avatar className='chat__image' src={profilePic} alt='Avatar' />
        <div  className='chat__details'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chat__timestamp'>{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat