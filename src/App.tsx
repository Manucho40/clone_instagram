import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import ThemeContext, { AppContextInterface } from './context/ThemeContext';
import StatusViewContext, { StatusView } from './context/StatusViewContext';


function App() {
  const [switchConnexionMode, setSwitchConnexionMode] = useState<boolean>(true)
  const [showStatus, setShowStatus] = useState<boolean>(false)
  const contextValue: AppContextInterface = {
    switchConnexionMode,
    updateSwitchConnexionMode: setSwitchConnexionMode
    }
  const contextView: StatusView = {
    showStatus,
    setShowStatus: setShowStatus
    }
  return (
    <ThemeContext.Provider value={contextValue}>
      <StatusViewContext.Provider value={contextView}>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/User' element={<UserPage   />}/>
        </Routes>
      </StatusViewContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
