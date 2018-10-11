import './_welcome.scss';
import React from 'react';

class Welcome extends React.Component {
  render(){
    return(
      <div className='welcome'>
        <h3> Welcome to </h3>
        <h3> Source Motor Sales & Service </h3>
        <p className='welcome-message'> At Source Motors we have no salesmen. I am the owner and sole individual responsible for helping you buy and sell your premium used car. The majority of my business is now based off of referrals and repeat customers, and as a result I keep a very small inventory, but I am here to help you track down whatever you may need. If you're not sure what car is right for you, give me a call and we can chat and work together to figure out what is best for you. Source Motors also has a full service department. If your car needs any repairs or routine maintenance, give us a call and we can give you a no frills, dealership alternative for taking care of your car. </p>
      </div>
    );
  }
};

export default Welcome;