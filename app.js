import React from 'react';
import ReactDom from 'react-dom';
import App from './src/views/App';
import List from './src/views/List';
import store from './src/store';
import { Provider } from 'react-redux';


// https://blog.csdn.net/qq_38225558/article/details/86604304
ReactDom.render(
  <Provider store={store}>
    <App />
    <List />
  </Provider>,
  document.getElementById('root')
);