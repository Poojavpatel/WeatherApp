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

  state = {
    temprature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    descripion:undefined,
    error:undefined,
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);  
      this.setState({
        temprature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:" ",
      }) 
    }else{
      this.setState({
        temprature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please enter a value",
      }) 
    }
    
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temprature={this.state.temprature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
