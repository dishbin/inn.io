import { useState } from 'react';
import { Socket } from 'socket.io-client';
import SplashInput from '../input/SplashInput';
import SplashPasswordInput from '../password-input/SplashPasswordInput';

import './SplashUserCreation.css'

export default function SplashUserCreation ({ socket, state, setState, setCreationMode }) {

    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        'retype password': ''
    });

    const [hasPasswordError, setHasPasswordError] = useState(false);

    const onTextChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.currentTarget.id]: e.currentTarget.value
        });
        // if ((e.currentTarget.id === 'password' || e.currentTarget.id === 'retype password')) checkForMatch();
    }

    const checkForMatch = () => {
        if (userInfo.password !== userInfo['retype password']) {
            if (hasPasswordError === false) setHasPasswordError(true);
        } else {
            if (hasPasswordError === true) setHasPasswordError(false);
        };
    }

    const handleSubmit = () => {
        if (userInfo.password === userInfo['retype password']) {
            setHasPasswordError(false);
            socket.emit('new-user-submission', {
                name: userInfo.username,
                email: userInfo.email,
                password: userInfo.password
            });
        } else {
            setHasPasswordError(true);
        }
    }
    
    return(
        <div className="SplashUserCreation">
            <h1 className='title'>welcome</h1>
            <div className='input-box'>
                <SplashInput 
                    label='username'
                    value={userInfo.username}
                    onTextChange={onTextChange}
                />
                <SplashInput 
                    label='email'
                    value={userInfo.email}
                    onTextChange={onTextChange}
                />
                <SplashPasswordInput 
                    label='password'
                    value={userInfo.password}
                    onTextChange={onTextChange}
                    hasError={hasPasswordError}
                />
                <SplashPasswordInput 
                    label='retype password'
                    value={userInfo.passwordMatch}
                    onTextChange={onTextChange}
                    hasError={hasPasswordError}
                />
                <div className='button-container'>
                    <button
                        className='back-button'
                        onClick={() => setCreationMode(false)}
                    >back to log in</button>
                    <button
                        className='submit-button'
                        onClick={handleSubmit}
                    >&gt;</button>
                </div>
            </div>
        </div>
    );
}