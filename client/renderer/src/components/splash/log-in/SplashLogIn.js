import { useState, useEffect } from 'react';
import SplashInput from '../input/SplashInput';
import SplashPasswordInput from '../password-input/SplashPasswordInput';
import './SplashLogIn.css';

export default function SplashLogIn ({ socket, setCreationMode, logIn }) {

    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    });

    const onTextChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const attemptLogIn = () => {
        socket.emit('log-in-attempt', {
            name: userInfo.username,
            password: userInfo.password
        });
    }

    return(
        <div className='SplashLogin'>
            <h1 className='title'>inn.io</h1>
            <div className='input-box'>
                <SplashInput 
                    label='username'
                    value={userInfo.username}
                    onTextChange={onTextChange}
                />
                <SplashPasswordInput 
                    label='password'
                    value={userInfo.password}
                    onTextChange={onTextChange}
                />
                <div className='button-container'>
                    <button
                        className='creation-mode-button'
                        onClick={() => setCreationMode(true)}
                    >new to inn.io?</button>
                    <button
                        className='submit-button'
                        onClick={attemptLogIn}
                    >&gt;</button>
                </div>
            </div>
        </div>
        
    );
}