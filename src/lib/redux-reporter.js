export default store => next => action => {
  console.log('__ACTION__', action);
  next(action);
};