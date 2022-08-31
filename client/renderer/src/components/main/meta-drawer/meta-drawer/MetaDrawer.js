import { useState } from 'react';
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
            Meta Drawer
        </div>
    );
}