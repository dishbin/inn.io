import { useState } from 'react';
import './MetaDrawer.css';

export default function MetaDrawer() {

    const [isOpen, setIsOpen] = useState(true);

    return(
        <div className='MetaDrawer' style={{ 
            width: (isOpen) ? '25vw' : '5vw',
            marginLeft: (isOpen) ? '75vw' : '95vw'
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