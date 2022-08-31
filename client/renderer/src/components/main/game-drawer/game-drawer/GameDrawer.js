import { useState } from 'react';
import './GameDrawer.css';

export default function GameDrawer() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`GameDrawer ${(isOpen) ? 'open' : 'close'}`} >
            <div className='top-bar'>
                <button
                    className='display-toggle'
                    onClick={() => setIsOpen(!isOpen)}
                >{(isOpen) ? 'close' : 'open'}</button>
            </div>
            Game Drawer
        </div>
    );
}