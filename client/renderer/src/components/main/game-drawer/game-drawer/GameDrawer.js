import { useState } from 'react';
import './GameDrawer.css';

export default function GameDrawer() {

    const [isOpen, setIsOpen] = useState(true);

    return(
        <div className='GameDrawer' style={{ 
            width: (isOpen) ? '25vw' : '5vw',
            }}>
            <div className='top-bar'>
                <button
                    className='display-toggle'
                    onClick={() => setIsOpen(!isOpen)}
                >{(isOpen) ? 'close' : 'open'}</button>
            </div>
            Meta Drawer
        </div>
    );
}