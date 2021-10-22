import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './Context/context';
import { SpeechProvider } from '@speechly/react-client';

import './assets/scss/base.scss';

ReactDOM.render(
  
    <SpeechProvider appId="0df72f5e-2447-40c0-86ac-febc8f517b99" language="en-US">
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>,
  document.getElementById('root')
);

