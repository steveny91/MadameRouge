import React, { Component } from 'react';
import Header from './header';
import Main from './main';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
         <Main />
      </div>
    );
  }
}

export default App;
