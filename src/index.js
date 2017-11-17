import React from 'react';
import ReactDOM from 'react-dom';import './css/index.css';
import './css/btstrp.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
