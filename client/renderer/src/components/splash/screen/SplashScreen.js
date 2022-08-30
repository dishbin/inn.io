import { useState, useEffect } from 'react';
import './SplashScreen.css';

import SplashUserCreation from '../user-creation/SplashUserCreation';
import SplashLogIn from '../log-in/SplashLogIn';

export default function SplashScreen({ socket, state, setState, isLoggedIn, setIsLoggedIn }) {

    const [creationMode, setCreationMode] = useState(false);

    const logIn = (user) => {
        setState({
            ...state,
            user: user
        });
        setIsLoggedIn(true);
    }

    const handleLogInError = () => {

    }

    useEffect(() => {

        socket.on('user-creation-successful', logIn);
        socket.on('log-in-successful', logIn);
        socket.on('log-in-failed', handleLogInError);

        return () => {
            socket.off('user-creation-successful', logIn);
            socket.off('log-in-successful', logIn);
            socket.off('user-creation-successful', handleLogInError);
        }
    })

    return(
        <div className='SplashScreen'>
            {(creationMode) && 
                <SplashUserCreation 
                    socket={socket}
                    state={state}
                    setState={setState}
                    setCreationMode={setCreationMode}
                />
            }
            {(!creationMode) &&
                <SplashLogIn 
                    socket={socket}
                    setCreationMode={setCreationMode}
                    logIn={logIn}
                />
            }
        </div>
    );
}