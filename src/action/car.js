const uuid = require('uuid/v4');

export const create = (car) => ({
  type: 'CAR_CREATE',
  payload: {
    id: uuid(),
    car,
  },
});