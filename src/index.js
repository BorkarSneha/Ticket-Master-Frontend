import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';

import 'bootstrap/dist/css/bootstrap.css'

import configureStore from './store/configureStore'

import {startSetCustomers} from './actions/customers'
import {startSetEmployees} from './actions/employees'
import {startSetDepartments} from './actions/departments'
import {startSetTickets} from './actions/tickets'
import {startGetUser} from './actions/user'

const store=configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

if(localStorage.getItem('authToken')){ //if token dan make api call
    store.dispatch(startSetCustomers())
    store.dispatch(startSetEmployees())
    store.dispatch(startSetDepartments())
    store.dispatch(startSetTickets())
    store.dispatch(startGetUser())
}
const ele=(
    <Provider store = {store}>
        <App/>
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'));

