import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import Header from '../Header/Header';
import Home from '../Home/Home';
import Teams from '../Teams/Teams';

import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/teams" component={Teams}></Route>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
