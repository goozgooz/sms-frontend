import './_car-form.scss';
import React from 'react';

const emptyState = {
  title: '',
  description: '',
  vin: '',
  year: 0,
  make: '',
  model: '',
  price: 0,
  condition: '',
  engine: '',
  drive: '',
  fuel: '',
  odometer: '',
  exteriorColor: '',
  interiorColor: '',
  titleStatus: '',
  transmission: '',
};

class CarForm extends React.Component {
  constructor(props){
    super(props);
    this.state = emptyState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]: value});
    console.log(this.state);
  };
  
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.setState(emptyState);
  }
  
  render(){
    return(
      <React.Fragment>
        <h1> Add Car </h1>
        
        <form 
          className='car-form'
          onSubmit={this.handleSubmit}
        >
          <label> headline 
          <input
            className='title-input'
            type='text'
            name='title'
            placeholder='car headline'
            value={this.state.title}
            onChange={this.handleChange}
          />
          </label>
          <input
            className='description-input'
            type='text'
            name='description'
            placeholder='long car description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input
            className='vin-input'
            type='text'
            name='vin'
            value={this.state.vin}
            onChange={this.handleChange}
          />
          <input
            className='year-input'
            type='number'
            name='year'
            value={this.state.year}
            onChange={this.handleChange}
          />
          <input
            className='make-input'
            type='text'
            name='make'
            value={this.state.make}
            onChange={this.handleChange}
          />
          <input
            className='model-input'
            type='text'
            name='model'
            value={this.state.module}
            onChange={this.handleChange}
          />
          
          <button type='submit'> add car </button>
        
        </form>
        
        
        
      </React.Fragment>
    ); 
  }
  
  
};

export default CarForm;
