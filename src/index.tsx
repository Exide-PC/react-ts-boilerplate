import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, rootElement);