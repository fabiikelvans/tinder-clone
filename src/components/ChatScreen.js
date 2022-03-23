import { Avatar } from '@mui/material'
import React, { useState } from 'react';
import './ChatScreen.css';

function ChatScreen() {

    const [input, setInput] = useState('');

    const [messages, setMessages] = useState([
        {
            name: 'Lisa',
            image: 'https://media.allure.com/photos/6127a91ac2052c31747415dd/1:1/w_2323,h_2323,c_limit/blackpink%20lisa%20gold%20background.jpg',
            message: 'Whats up'
        },
        {
            message: "Hey Lisa, How are you doing?"
        }
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }

  return (
    <div className='chat__screen'>
        <p className='chat__screen-timestamp'>YOU MATCHED WITH LISA ON 20/04/2022</p>
        {
            messages.map(message => (
               message.name ? (
                <div className="chat__screen-message">
                <Avatar
                className='chat__screen-image'
                alt={message.name}
                src={message.image}
                />
                <p className='chat__screen-text'>{message.message}</p>
            </div>
               ) : (
                <div className="chat__screen-message">
                <p className='chat__screen-text-user'>{message.message}</p>
            </div>
               )
            ))
        }

            <form className="chat__screen-form">
                <input className="chat__screen-input" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Type a message' type="text" />
                <button type='submit' className="chat__screen-btn"> SEND </button>
            </form>
    
    </div>
  )
}

export default ChatScreen