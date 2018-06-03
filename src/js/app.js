import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/indexContainer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
render(
    <Provider store={store}>
        <App/>
    </Provider>,document.getElementById('root')
)