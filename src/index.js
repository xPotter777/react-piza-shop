import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/app.scss';
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './App';

const app =
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>

ReactDOM.render( app,
  document.getElementById('root'),
);
