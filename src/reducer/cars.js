const emptyState = {};

export default(state = emptyState, {type,payload}) => {
  switch(type){
    
  case 'CAR_CREATE':
    return {...state, [payload.id]: payload};
    
  case 'CAR_REMOVE':
    let newState = {...state};
    delete newState[payload];
    return newState;
    
  default:
    return state;
  }
};
