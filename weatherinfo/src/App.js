import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"


class App extends Component {

  state = {
    temprature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    wind:undefined,
    pressure:undefined,
    descripion:undefined,
    error:undefined,
    maindescription:undefined,
  }

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);  
      this.setState({
        temprature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        wind:data.wind.speed,
        pressure:data.main.pressure,
        description:data.weather[0].description,
        maindescription:data.weather[0].main,
        error:" ",
      }) 
    }else{
      this.setState({
        temprature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        wind:undefined,
        pressure:undefined,
        description:undefined,
        maindescription:undefined,
        error:"Please enter a value",
      }) 
    }
    
  }

  render() {
    return (
      <div className="fullcontent">
        <div className="wrapper">
          {/*<div class="pic">
              <h1>24°</h1>
              <h2>Rainy</h2>
            </div> */}
          <Titles  
            maindescription={this.state.maindescription}
            temprature={this.state.temprature}
          />
          <div className="info">
            <div className="location">
              <Form getWeather={this.getWeather}/>
              {/*<form action="#">
                <input type="text" name="City"  placeholder="City" />
                <input type="text" name="Country"  placeholder="Country" />
                <button class="btn">Get Weather</button>
              </form>*/}
            </div>
            <div className="stats">
              {this.state.temprature &&
              <p>Statistics</p>
              }
              <Weather 
                temprature={this.state.temprature}
                city = {this.state.city}
                country = {this.state.country}
                humidity = {this.state.humidity}
                wind = {this.state.wind}
                pressure = {this.state.pressure}
                description = {this.state.description}
                error = {this.state.error}
              />
              
              {/*<div class="statpairbox">
                <div class="statpair">
                  <div class="statname">Humidity</div>
                  <div class="statvalue">37%</div>
                </div>
                <div class="statpair">
                  <div class="statname">Wind</div>
                  <div class="statvalue">27km/hr</div>
                </div>
                <div class="statpair">
                  <div class="statname">Humidity</div>
                  <div class="statvalue">37%</div>
                </div>
                <div class="statpair">
                  <div class="statname">Wind</div>
                  <div class="statvalue">37%</div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*<div>
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
</div>*/
