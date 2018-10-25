import {combineReducers} from 'redux';

import cars from './cars.js';
import photos from './photos.js';

export default combineReducers({
  cars,
  photos,
});
