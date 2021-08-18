
import React from 'react';
import Weather from './Components/Weather';

import { LanguageContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import './App.css';



function App() {

  // const [language, setLanguage] = useContext('enlight');

  return (

    <div className="App">

    <LanguageContext.Provider value="En">

        <Weather />
   
    </LanguageContext.Provider> 

    </div>
  );
};

export default App;
