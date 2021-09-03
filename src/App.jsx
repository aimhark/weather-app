
import React from 'react';
import Weather from './Components/Weather';


import { LanguageContext } from './context';

import './App.css';



function App() {

  return (

    <div className="App">

    <LanguageContext.Provider value="En">
        <Weather />
   
    </LanguageContext.Provider> 

    </div>
  );
};

export default App;
