import React, {useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import ThemeContext, { AppContextInterface } from './context/ThemeContext';


function App() {
  const [switchConnexionMode, setSwitchConnexionMode] = useState<boolean>(true)
  const contextValue: AppContextInterface = {
    switchConnexionMode,
    updateSwitchConnexionMode: setSwitchConnexionMode
    }
  return (
    <ThemeContext.Provider value={contextValue}>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/User' element={<UserPage   />}/>
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
