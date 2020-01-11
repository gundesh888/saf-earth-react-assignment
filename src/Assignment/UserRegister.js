import React from 'react';
import './Assignment.css';
const axios = require('axios');

class UserRegister extends React.Component  {
      constructor(props){
        super(props);

        this.state={name:'',username:'', email:'', mobile:'', password:'' };
        this.saveName = this.saveName.bind(this);
        this.saveUsername = this.saveUsername.bind(this);
        this.saveEmail = this.saveEmail.bind(this);
        this.saveMobile = this.saveMobile.bind(this);
        this.savePassword = this.savePassword.bind(this);
        this.register =this.register.bind(this);
      }

      returnName()
      {
       return this.state.name;
      }
      saveName(event){
       this.setState({ name: event.target.value });
      }
      returnUsername()
      {
       return this.state.username;
      }
      saveUsername(event){
       this.setState({ username: event.target.value });
      }
      returnEmail()
      {
       return this.state.email;
      }
      saveEmail(event){
       this.setState({ email: event.target.value });
      }
      returnMobile()
      {
       return this.state.mobile;
      }
      saveMobile(event){
       this.setState({ mobile: event.target.value });
      }
      returnPassword()
      {
       return this.state.password;
      }
      savePassword(event){
       this.setState({ password: event.target.value });
      }

  register() {
    // Send a POST request
// axios({
//   method: 'post',
//   url: 'http://localhost:5000/api/v1/register',
//   data: {
//     name: 'Fred',
//     email: 'Flintstone',
//     password: '123',
//     mobile:'3456'
//   }
// });
axios.post('http://localhost:5000/api/v1/register', {
  name:this.state.name,
  email:this.state.email,
  password:this.state.password,
  mobile:this.state.mobile
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
  }
  render(){
  return (
       <div>
        <form className="form">
          <h4>Registration</h4>
          <div className="form-group">
            <input className="form-control"  type="text" name="name" value={this.state.name} placeholder="ENTER NAME" onChange={event =>this.saveName(event)}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="username"  value={this.state.username} placeholder="ENTER USERNAME" onChange={event =>this.saveUsername(event)} />
          </div>
          <div className="form-group">
            <input className="form-control" type="email" name="email" value={this.state.email} placeholder="ENTER EMAIL ID" onChange={event =>this.saveEmail(event)}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="text" name="mobile" value={this.state.mobile} placeholder="ENTER MOBILE NUMBER" onChange={event =>this.saveMobile(event)}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" value={this.state.password} placeholder="ENTER PASSWORD" onChange={event =>this.savePassword(event)}/>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="Cpassword" placeholder="ENTER CONFIRM PASSWORD"/>
          </div>
          
          <div className="form-group">
          <a id="btn-login" href="#" class="btn btn-success"  onClick={this.register}>Register </a>
          </div>
        </form>
    </div>
  );
}
}
export default UserRegister;
