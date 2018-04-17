import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

class App extends Component {
  render() {
    return (
      <div>
        <p>It works </p>
        <Titles />
        <Weather />
        <Form />
      </div>
    );
  }
}

export default App;
