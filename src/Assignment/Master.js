import React from 'react';
import './Assignment.css';
import {Link} from 'react-router-dom';

class MasterPage extends React.Component{
    constructor(){
        super();
  
      }
  


    render(){
    return (
        <div>
            <nav>
                <ul className="Nav-Links">
                    <Link to="/userlogin">
                         <li>Login</li>
                    </Link>
                    <Link to="/userregister">
                         <li>Register</li>
                    </Link>
                    <Link to="/userhome">
                         <li>Home</li>
                   </Link>
                </ul>
            </nav>           
        </div>
        
    );
    }
}
export default MasterPage;