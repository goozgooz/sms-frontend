import './_inventory.scss';
import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../navbar';
import Footer from '../footer';
import Car from './car.js';


class Inventory extends React.Component {
  constructor(props){
    super(props);
    
  }

  componentDidUpdate(){
    return Object.keys(this.props.cars).map((car,i) => {(
      <Car key={i} />  
    )});
    // console.log('lifecyle', this.props.cars);
  }
  
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <div className = 'inventory-container'>
          <h3> Source Motor's Inventory </h3>
          <p className='welcome-message'> 
            At Source Motors, I specialize in tracking down and finding the exact right car for you. As a result, I keep a relatively small inventory, so if you don't see what you like please reach out and <Link to='/contact' className='inline-link'>contact me</Link> today, and together we can find the exact right car for you. 
          </p>
        </div>
        <Footer />
      </React.Fragment>
 
    );
  }
}


export default Inventory;