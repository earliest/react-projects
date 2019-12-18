import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React!",
      contentText: "This is interesting"
    };
  }
  render() {

    return (
      <div className="App">
        <h1>{this.state.headerText}</h1>
        <h1>{this.state.contentText}</h1>
        {/* <Header />
        <Content /> */}
        
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    var myStyle = {
      fontSize: 100,
      color: 'grey'
    }
    return (
      <div className="App-content">
        <h1 style={myStyle}>Hello!</h1>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{1+1}</p>
      </div>
    );
  }
}

export default App;
