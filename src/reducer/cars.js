const emptyState = {};

export default(state = emptyState, {type,payload}) => {
  switch(type){
    
  case 'CAR_CREATE':
    return {...state, [payload.id]: payload};
    
  default:
    return state;
  }
};
