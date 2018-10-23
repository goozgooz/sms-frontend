import inventory from './inventory.js';
const folders = Object.keys(inventory).map(key => {
  return inventory[key].folder;
});

import fetch from 'isomorphic-fetch';
import {Dropbox} from 'dropbox';
const dbx = new Dropbox({
  accessToken: __DROPBOX_KEY__,
  fetch: fetch,
});

// exported action creator 
export const fetchPhotos = () => (store) => {
  return Promise.all(folders.map(getPaths))
    .then(folders => {
      Promise.all(folders.map(createImageArray))
        .then(data => {
          let results = {};
          for(let i of data) {
            results[i.car] = i;
          };
          return store.dispatch(get(results));
        })
        .catch(console.error);
    })
    .catch(console.error);
};

// action sent to reducer
const get = (photos) => ({
  type: 'PHOTOS_GET',
  payload: photos,
});



// DROPBOX API CALLS BELOW

// goes into the specific dropbox folder and gets the path to each image
const getPaths = (folder) => {
  return new Promise((resolve,reject) => {
    dbx.filesListFolder({path: `/${folder}`})
      .then(data => {
        resolve({
          car: folder,
          paths: data.entries,
        });
      })
      .catch(console.error);
  });
};

// for each path in the given folder - call the getImageUrl function below
const createImageArray = (folder) => {
  return Promise.all(folder.paths.map(getImgUrl))
    .then(array => {
      array.forEach((path, i) => {
        if(path.hasOwnProperty('main')) {
          let main = path;
          array.splice(i,1);
          array.unshift(main);
        };        
      });
      folder.images = array;
      return folder;
    });
};


// gets temporary link to stream given file path
const getImgUrl = (file) => {
  return new Promise((resolve, reject) => {
    dbx.filesGetTemporaryLink({path: file.path_display})
      .then(data => {
        if(file.name === 'main.JPG') {
          resolve({main: data.link});
        } else {
          resolve({images: data.link});
        }
      })
      .catch(console.error);
  });
};







