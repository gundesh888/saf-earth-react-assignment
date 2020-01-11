import React from 'react';

import './Assignment.css';
import MasterPage from '../Assignment/Master';
import UserRegister from '../Assignment/UserRegister';
import UserLogin from '../Assignment/Login';
import UserHome from '../Assignment/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';



class Apps extends React.Component {
    constructor(){
        super();
  
      }
  
    render(){
    return(
        <Router>
            <div>
                <MasterPage />
                <Route path="/userlogin" component={UserLogin} />
                <Route path="/userregister" component={UserRegister} />
                <Route path="/userhome" component={UserHome} />
            </div>
        </Router>
    );
    }
}
export default Apps;