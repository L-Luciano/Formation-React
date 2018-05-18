import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App defaultValue={5} />, document.getElementById(
  'root'
) as HTMLElement);
registerServiceWorker();
