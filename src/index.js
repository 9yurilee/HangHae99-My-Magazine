import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import mystore from './redux/Store';

ReactDOM.render(
  // store 연결하고 app.js로~
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
