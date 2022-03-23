import React from 'react';
import Chat from './Chat';
function Chats() {
  return (
    <div className='chats'>
        <Chat
        name='Mike'
        message = 'Hey there'
        timestamp = '2 Minutes ago'
        profilePic = 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg'

        />
    </div>
  )
}

export default Chats