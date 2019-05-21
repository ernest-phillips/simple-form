import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'


import './index.css';
import App from './App';

const rootReducer = combineReducers({
    form: formReducer
})

const store = createStore(rootReducer)
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

