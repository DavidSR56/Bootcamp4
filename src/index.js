import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data/data';

//The app is now passing the data as a property
ReactDOM.render(<App data={data} />, document.getElementById('root'));
