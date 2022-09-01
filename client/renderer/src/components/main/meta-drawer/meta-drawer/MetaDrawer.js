import { useState } from 'react';
import ChannelChat from '../../../channel-chat/ChannelChat';
import './MetaDrawer.css';

export default function MetaDrawer() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`MetaDrawer ${(isOpen) ? 'meta-open' : 'meta-close'}`}>
            <div className='top-bar'>
                <button
                    className='display-toggle'
                    onClick={() => setIsOpen(!isOpen)}
                >{(isOpen) ? 'close' : 'open'}</button>
            </div>
            <ChannelChat />
        </div>
    );
}