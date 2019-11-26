import React from 'react';
import ReactDOM from 'react-dom';
// Css
import './index.css';
// Services
import { data } from './data';
// Components
import Tweet from './Tweet';

ReactDOM.render(<Tweet tweet={data} />, document.querySelector('#root'));