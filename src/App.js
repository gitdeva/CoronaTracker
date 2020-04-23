import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet.js'
import Welcome from './components/Welcome'
import Disclaimer from './components/Hello'
import { Status } from './components/Status.js'
import Table from './components/Table'

class App extends Component{
  render(){
    return (
      <div className = "App">
        <Greet />
        <Welcome />
        <Disclaimer />
        {/* <Status /> */}
        <Table />
      </div>
    );      
  }
}

export default App;
