import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './Context/context';
import { BrowserRouter } from 'react-router-dom';

import './assets/scss/base.scss';

ReactDOM.render(
  
    <BrowserRouter>
    <Provider>
    <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

