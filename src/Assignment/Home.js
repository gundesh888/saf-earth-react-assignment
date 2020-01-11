import React from 'react';
import './Assignment.css';
import $ from 'jquery';
const axios = require('axios');

class UserHome extends React.Component{
    constructor(props){
        super(props);

        this.state={taskname:'', projectname:'', date:'', time:'', loggedDetails: []}

        this.savetaskname = this.savetaskname.bind(this);
        this.saveprojectname = this.saveprojectname.bind(this);
        // this.savedate = this.savedate.bind(this);
        this.savetime = this.savetime.bind(this);
      
       this.save=this.save.bind(this);
       this.getLoggedDetails =  this.getLoggedDetails.bind(this);
       this.returnUserLoggedInfo = this.returnUserLoggedInfo.bind(this);
       this.date=this.date.bind(this);
    }

       componentDidMount(){
        this.getLoggedDetails();
       }
  
      
      
      returntaskname()
      {
       return this.state.taskname;
      }
      savetaskname(event){
       this.setState({ taskname: event.target.value });
      }
      returnprojectname()
      {
       return this.state.projectname;
      }
      saveprojectname(event){
       this.setState({ projectname: event.target.value });
      }
      // returndate()
      // {
      //  return this.state.date;
      // }
      // savedate(event){
      //  this.setState({ date: event.target.value });
      // }
      returntime()
      {
       return this.state.time;
      }
      savetime(event){
       this.setState({ time: event.target.value });
      }
     

      save(){
        axios.post('http://localhost:5000/api/v1/logTime', {
            taskname:this.state.taskname,
            projectname:this.state.projectname,
            date:this.state.date,
            time:this.state.time
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      
   async getLoggedDetails() {
    let response = await axios.get('http://localhost:5000/api/v1/getLoggedDetails');
    this.setState({loggedDetails: response.data.data}); 
   }
   returnUserLoggedInfo (){
     if(this.state.loggedDetails) {
    let item = this.state.loggedDetails.map(items=> {
       return (<tr>
      
     <td>{items.taskname} </td><br/>
     <td>{items.projectname}</td>
     <td>{items.date}</td>
     <td>{items.time}</td>
          </tr>)
    }); 
    return item;
  }
  }
  date(){
   
  }
    render(){
        
        return(
            <div>
              <div className="row">
                  <div className="col-md-6">
                      <form className="form">
                          <div className="form-group"  Style="width:63%">  
                              <input type="text" className="form-control" name="taskname" value={this.state.taskname} 
                                placeholder="Enter Task Name"  onChange={event =>this.savetaskname(event)}/>  
                          </div>
                          <div className="form-group">
                              <select className="selectpicker" value={this.state.projectname} data-style="btn-info"  onChange={event =>this.saveprojectname(event)}>
                                      <option>Project1</option>
                                      <option>Project2</option>
                                      <option>Project3</option>
                              </select>
                          </div> <br />
                          <div className="form-group">
                              <input id="datepicker" width="230"  />
                          </div>
                          <div className="form-group" Style="width:63%" >
                              <input type="text" className="form-control timepicker" value={this.state.time} placeholder="HH:MM"  onChange={event =>this.savetime(event)}/>
                          </div>
                          
                          <div className="btn-group" Style="margin-top:10px">
                              <a id="btn-login" href="#" className="btn btn-primary" onClick={this.save}>Save </a>
                          </div>
                      </form>
                  </div>
                  
                  <div className="col-md-6">
                      <form className="tableform">
                          <div className="table">
                              <table>
                          
                                    <tr>
                                      <th>Task Name</th> 
                                      <th>Project</th>
                                      <th>Date</th>
                                      <th>Time</th>
                                    </tr>
                                    <tbody>
                                      <tr>   {this.returnUserLoggedInfo()}</tr>
                                    </tbody>
                            </table> 
                          </div>
                        </form>
                    </div>
             </div>
           </div>

        );
    }
}

export default UserHome;