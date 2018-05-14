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
    
    this.quickAdd = this.quickAdd.bind(this);
  };
  
  quickAdd(){
    this.props.formSubmit({
      title: 'test car',
      description: 'testing',
    });
  };

  handleChange(e){
    let {name,value} = e.target;
    this.setState({[name]: value});
  };
  
  handleSubmit(e){
    e.preventDefault();
    
    this.props.formSubmit(this.state);
  }
  
  componentDidMount(){
    this.quickAdd();
  }
  
  render(){
    return(
      <div className='car-form'>

        <form 
          className='car-form'
          onSubmit={this.handleSubmit}
        >
        
          <div className='field'> 
            <label> Headline: </label>
            <input
              className='title-input'
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Vin Number: </label>
            <input
              className='vin-input'
              type='text'
              name='vin'
              value={this.state.vin}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Year: </label>
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
            <label> Make: </label>
            <input
              className='make-input'
              type='text'
              name='make'
              value={this.state.make}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Model: </label>
            <input
              className='model-input'
              type='text'
              name='model'
              value={this.state.model}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Price: </label>
            <input
              className='price-input'
              type='number'
              name='price'
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Condition: </label>
            <input
              className='condition-input'
              type='text'
              name='condition'
              value={this.state.condition}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Engine: </label>
            <input
              className='engine-input'
              type='text'
              name='engine'
              value={this.state.engine}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Drive:  </label>
            <input
              className='drive-input'
              type='text'
              name='drive'
              value={this.state.drive}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Fuel: </label>
            <input
              className='fuel-input'
              type='text'
              name='fuel'
              value={this.state.fuel}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Odometer: </label>
            <input
              className='odometer-input'
              type='number'
              name='odometer'
              value={this.state.odometer}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Exterior Color: </label>
            <input
              className='exterior-color-input'
              type='text'
              name='exteriorColor'
              value={this.state.exteriorColor}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Interior Color: </label>
            <input
              className='interior-color-input'
              type='text'
              name='interiorColor'
              value={this.state.interiorColor}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Title Status: </label>
            <input
              className='title-status-input'
              type='text'
              name='titleStatus'
              value={this.state.titleStatus}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Transmission: </label>
            <input
              className='transmission-input'
              type='text'
              name='transmission'
              value={this.state.transmission}
              onChange={this.handleChange}
            />
          </div>
          
          <div className='field'>
            <label> Description: </label>
            <input
              className='description-input'
              type='text'
              name='description'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          
          <button type='submit' className='submit-button'> Add Car </button>
        
        </form>
        
        
        
      </div>
    ); 
  }
  
  
};

export default CarForm;
