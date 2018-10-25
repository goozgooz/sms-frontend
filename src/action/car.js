import cars from './inventory.js';

export const getCars = () => store => {
  // request to my backend api to get cars in mongo
  return store.dispatch(get(cars));
};

const get = (payload) => ({
  type: 'CARS_GET',
  payload: payload,
})