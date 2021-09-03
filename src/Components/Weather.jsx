
import { useState } from 'react';


function Weather(props) {
 
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [icon, setIcon] = useState({})

    const search = async(e) => {
      e.preventDefault();
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7a70aadda6c533a6072386a840e62097`)
        const data = await response.json();
        setQuery('')
        console.log(data);
        setWeather(data)
        
        setIcon(data.weather[0].icon);

    }

    // const dateBuilder = (d) => {

    //     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    //     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    //     let day = days[d.getDay()];
    //     let date = d.getDate();
    //     let month = months[d.getMonth()];
    //     let year = d.getFullYear();
    
    //     return `${day} ${date} ${month} ${year}`
    
    //   }

    const today = Date().toString();

    return (
      
    <div className={(typeof weather.main != 'undefined') 
      ? ((weather.main.temp > 16) 
      ? 'app-warm' : 'app') 
      : 'app'}>
    <main>
          <form onSubmit = { search}>
            <div className="search-box">
              <input type="text" className="search-bar" placeholder="Search..." 
              value={query} onChange= { (e)=> setQuery(e.target.value) }/>
              <button type ="submit" >search</button>
            </div>
          </form>
        {(typeof weather.main !== 'undefined' ) && (
          <div className="container">
            <div className="location-box">
              <h3>Today</h3>
              <div className="location">{weather.name}</div>
              <div className="date">{today}</div>
            </div>
            <div className="weather-box">
              <div className="weather">{weather.weather[0].main}</div>
                <div className=''>
                <img className='icon' src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather icon" />
                <div className="temp">
                    <div className="temp">{Math.round(weather.main.temp)}°</div>
                    </div>
                </div>
              </div>
            </div>
            
        ) }
​    </main>

    </div>
  )
   
}

export default Weather


