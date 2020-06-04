import React from 'react';
import DisplayCar from './DisplayCar';

class Cars extends React.Component {
  render() {
      return(
        <div>
         <DisplayCar id1="fname" id2="lname"/>
        </div>
      );
    }
  };

export default Cars;