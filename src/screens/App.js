import Navigation from '../routers/Navigation';
import Navbar from './Navbar';
import "../scss/App.scss"
import React, { useState, useEffect } from 'react';

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  




  return (
    <div className="container-fluid">
      <div>
      {!isOnline && <p className='interneterror '>Internet disconnected</p> }
       <Navbar /> 
      <Navigation />
      </div>     
    </div>
  );
}
export default App;
