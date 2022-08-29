import { useState } from 'react';
import './SplashPasswordInput.css';

export default function SplashPasswordInput({ label, value, onTextChange, hasError }) {

    return(
        <input 
            className={`SplashPasswordInput ${(hasError) ? 'error': ''}`}
            type='password'
            placeholder={label}
            value={value}
            onChange={onTextChange}
            id={label}
        />
    );
}