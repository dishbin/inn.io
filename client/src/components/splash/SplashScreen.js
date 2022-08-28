import { useState } from 'react';
import './SplashScreen.css';

import SplashInput from './SplashInput';

export default function SplashScreen() {

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

    const handleSubmit = () => {
        console.log(userInfo);
    }

    return(
        <div className='SplashScreen'>
            <h1 className='title'>inn.io</h1>
            <div className='input-box'>
                <SplashInput 
                    label='username'
                    value={userInfo.username}
                    onTextChange={onTextChange}
                />
                <SplashInput 
                    label='password'
                    value={userInfo.password}
                    onTextChange={onTextChange}
                />
                <button
                    className='submit-button'
                    onClick={handleSubmit}
                >></button>
            </div>
        </div>
    );
}