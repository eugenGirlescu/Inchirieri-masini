import React from 'react';
import './DisplayCar.css';

 class DisplayCar extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: "",
      lastName: ""
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }
   
   handleSubmit(){
    let fname = document.getElementById(this.props.id1).value;
    let lname=document.getElementById(this.props.id2).value;
    this.setState({
      firstName:fname,
      lastName:lname
   })
  }

      render() {
         return (
          <div className ="form">
               <form  id ="class">
                	First name: <input id={this.props.id1} type = "text"   /><br/>
                  Last name: <input id ={this.props.id2} type = "text"    /><br/>
               </form>
               <button onClick={this.handleSubmit}>Submit</button><br/>
               <div>{this.state.firstName}</div>
               <div>{this.state.lastName}</div>

          </div>
          );
     }
};
export default DisplayCar;
