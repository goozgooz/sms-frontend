import cars from './mock-cars.js';

// export const create = (car) => ({
//   type: 'CAR_CREATE',
//   payload: {
//     id: uuid(),
//     car,
//   },
// });

// export const remove = (id) => ({
//   type: 'CAR_REMOVE',
//   payload: id,
// });

// export const edit = (payload) => ({
//   type: 'CAR_EDIT',
//   payload: payload,
// });

export const getCars = () => store => {
  // request to my backend api to get cars in mongo
  return store.dispatch(get(cars));
};

const get = (payload) => ({
  type: 'CARS_GET',
  payload: payload,
})