const emptyState = {};

export default(state = emptyState, {type,payload}) => {
  switch(type){
  
  case 'PHOTOS_GET':
    return Object.assign({}, state, payload);
    
  default:
    return state;
  }
};
