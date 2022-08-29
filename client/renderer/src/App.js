import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

import SplashScreen from './components/splash/screen/SplashScreen';

function App() {

  const [socket, setSocket] = useState(null);
  const [state, setState] = useState({
    user: null
  });

  const attemptLogIn = (credentials) => {
    socket.emit('log-in-attempt', credentials);
  }

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:4000`);
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      {(socket && state.user === null) &&
        <SplashScreen socket={socket} state={state} setState={setState} />
      }
    </div>
  );

}

export default App;