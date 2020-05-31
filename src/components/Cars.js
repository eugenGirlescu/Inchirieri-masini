import React from 'react';
import DisplayCarList from './DisplayCarList';
import DisplayCar from './DisplayCar';

class Cars extends React.Component {
  
   
    render() {
      return(
        <div>
         <DisplayCar />
         <DisplayCar />
        </div>
      );
    }
    };

export default Cars;