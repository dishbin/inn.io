import { useState, useEffect } from 'react';

import './ChannelChat.css';
import ChannelChatContainer from './container/ChannelChatContainer';
import ChannelChatMenuButton from '../main/meta-drawer/menu-button/MenuButton';

export default function ChannelChat({ setTab }) {

    return(
        <div className='ChannelChat'>
            <ChannelChatContainer />
        </div>
    );
}