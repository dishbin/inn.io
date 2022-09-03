import { useState, useEffect } from 'react';

import './MenuButton.css';

export default function MenuButton({ name, setTab }) {

    return(
        <div>
            <div className='MenuButton' id={name} onClick={(e) => setTab(e, name)}>
            </div>
        </div>
        
    );
}