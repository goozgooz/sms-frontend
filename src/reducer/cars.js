const emptyState = {};

export default(state = emptyState, {type,payload}) => {
  switch(type){
    
  case 'CAR_CREATE':
    return {...state, [payload.id]: payload};
    
  case 'CAR_REMOVE':
    let newState = {...state};
    delete newState[payload];
    return newState;
    
  case 'CAR_EDIT':
    let oldCar = state[payload.id].car;
    let newCar = Object.assign({},oldCar, payload);
    console.log({newCar});
    return {...state, [payload.id]:newCar};
    
  default:
    return state;
  }
};
