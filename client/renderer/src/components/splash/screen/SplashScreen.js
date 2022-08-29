import { useState } from 'react';
import './SplashScreen.css';

import SplashUserCreation from '../user-creation/SplashUserCreation';
import SplashLogIn from '../log-in/SplashLogIn';

export default function SplashScreen({ socket, state, setState }) {

    const [creationMode, setCreationMode] = useState(false);

    const logIn = (user) => {
        setState({
            ...state,
            user: user
        });
    }

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