import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

 const api_key = "20622a2e98d5703ef596241796343d24";
// var apicall = http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY} 
// var apicallciy = api.openweathermap.org/data/2.5/weather?q=London
// var ApiCallCountry = http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=20622a2e98d5703ef596241796343d24
// var finalapicall = http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api_key}

class App extends Component {

  getWeather = async(e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${api_key}`);
    const data = await api_call.json();
    console.log(data);  
  }

  render() {
    return (
      <div>
        <p>It works </p>
        <Titles />
        <Weather />
        <Form getWeather={this.getWeather}/>
      </div>
    );
  }
}

export default App;
