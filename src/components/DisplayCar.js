import React from 'react';
import './DisplayCar.css';

 class DisplayCar extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: "",
      lastName: ""
    }
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleFirstName(event){
    this.setState({firstName:event.target.value});
  }

  handleLastName(event){
    this.setState({lastName:event.target.value});
  }

  handleSubmit(){
   let fname = document.getElementById('fname').value;
   let lname=document.getElementById("lname").value;
   this.setState({
     firstName:fname,
     lastName:lname
   })
  }

      render() {
         return (
          <div className ="form">
               <form  id ="class">
                	First name: <input id="fname" type = "text"   /><br/>
                  Last name: <input id ="lname" type = "text"    /><br/>
              
               </form>
               <button onClick={this.handleSubmit}>Submit</button><br/>
               <div>{this.state.firstName}</div>
               <div>{this.state.lastName}</div>

          </div>
          );
     }
};
export default DisplayCar;
