import React from 'react';
import DisplayCar from './DisplayCar';

class Cars extends React.Component {
  render() {
      return(
        <div>
         <DisplayCar id1="fname" id2="lname"/>
         <DisplayCar id1="fname1" id2 = "lname1" />
        </div>
      );
    }
  };

export default Cars;