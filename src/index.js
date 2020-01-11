import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import UserRegister from './Assignment/UserRegister';
// import UserLogin from './Assignment/Login';
// import UserHome from './Assignment/Home';
// import MasterPage from './Assignment/Master';
import Index from './Assignment/Index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
