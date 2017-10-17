import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import './index.css';

import App from './Components/App/App';
import Teams from './Components/Teams/Teams';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/teams" component={Teams}></Route>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
