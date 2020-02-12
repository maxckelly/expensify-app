import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter.js';

// Styles
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<AppRouter />, document.getElementById('app'));