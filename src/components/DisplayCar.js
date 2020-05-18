import React from 'react';
import imag from './dacia_logan.jpg';
import './DisplayCar.css';

 class DisplayCar extends React.Component {
    render () {
        return (
           <div className ='tc bg-light-blue dib br3 ma2 grow bw2 shadow-5'>
            <h1>{this.props.name}</h1>
            <p>{this.props.price} euro/zi</p>
            <img src ={this.props.img} />
        </div> 
        ); 
    }
};
export default DisplayCar;
