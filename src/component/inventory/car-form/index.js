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
  };
  
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.setState(emptyState);
  }
  
  render(){
    return(
      <React.Fragment>
        <form 
          className='car-form'
          onSubmit={this.handleSubmit}
        >
        
          <div className='field'> 
            <label> headline </label>
            <input
              className='title-input'
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> vin number </label>
            <input
              className='vin-input'
              type='text'
              name='vin'
              value={this.state.vin}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> year </label>
            <input
              className='year-input'
              placeholder=''
              type='number'
              name='year'
              value={this.state.year}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> make </label>
            <input
              className='make-input'
              type='text'
              name='make'
              value={this.state.make}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> model </label>
            <input
              className='model-input'
              type='text'
              name='model'
              value={this.state.model}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> price </label>
            <input
              className='price-input'
              type='number'
              name='price'
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> condition </label>
            <input
              className='condition-input'
              type='text'
              name='condition'
              value={this.state.condition}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> engine </label>
            <input
              className='engine-input'
              type='text'
              name='engine'
              value={this.state.engine}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> drive  </label>
            <input
              className='drive-input'
              type='text'
              name='drive'
              value={this.state.drive}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> fuel </label>
            <input
              className='fuel-input'
              type='text'
              name='fuel'
              value={this.state.fuel}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> odometer </label>
            <input
              className='odometer-input'
              type='number'
              name='odometer'
              value={this.state.odometer}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> exterior color </label>
            <input
              className='exterior-color-input'
              type='text'
              name='exteriorColor'
              value={this.state.exteriorColor}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> interior color </label>
            <input
              className='interior-color-input'
              type='text'
              name='interiorColor'
              value={this.state.interiorColor}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> title status </label>
            <input
              className='title-status-input'
              type='text'
              name='titleStatus'
              value={this.state.titleStatus}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> transmission </label>
            <input
              className='transmission-input'
              type='text'
              name='transmission'
              value={this.state.transmission}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> desciption </label>
            <input
              className='description-input'
              type='text'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          
          <button type='submit'> add car </button>
        
        </form>
        
        
        
      </React.Fragment>
    ); 
  }
  
  
};

export default CarForm;
