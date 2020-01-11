import React from 'react';
import './Assignment.css';
import {Link} from 'react-router-dom';

class UserLogin extends React.Component{
    constructor(){
        super();
  
      }

      

    render(){

    return(
       <div>
             <form className="form">
             <h4>Login</h4>
             <div className="input-group">
                 
                <input type="text" className="form-control" name="username" value="" placeholder="username"/>                                        
             </div><br/>
             <div className="input-group">
               
                <input type="password" className="form-control" name="password" placeholder="password"/>
            </div><br/>
                    <div className="btn-group">
                        <a id="btn-login" href="#" class="btn btn-success">Login  </a>
                    </div>
                    <div className="btn-group" Style="margin:5px">
               <Link to="/userhome">     <a id="btn-login" href="#" class="btn btn-info" >Registration  </a></Link>
                    </div>
            </form>
       </div>
    );
}
}
export default UserLogin;