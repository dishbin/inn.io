import { useState, useEffect } from 'react';

import './ChannelChat.css';
import ChannelChatContainer from './container/ChannelChatContainer';
import ChannelChatMenuButton from './menu-button/ChannelChatMenuButton';

export default function ChannelChat() {
    return(
        <div className='ChannelChat'>
            <ChannelChatMenuButton />
            <ChannelChatContainer />
        </div>
    );
}