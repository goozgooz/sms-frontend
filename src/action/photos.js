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

export const fetchPhotos = () => {
  Promise.all(folders.map(getPaths))
    .then(folders => {
      Promise.all(folders.map(createImageArray))
        .then(data => {
          console.log(data);
          return store.dispatch(get(data));
        })
        .catch(console.error);
    })
    .catch(console.error);
};

const get = (photos) => ({
  type: 'PHOTOS_GET',
  payload: photos,
});


let createImageArray = (folder) => {
  return Promise.all(folder.paths.map(getImg))
    .then(array => {
      folder.images = array;
      return folder;
    });
};

let getImg = (file) => {
  return new Promise((resolve, reject) => {
    dbx.filesGetTemporaryLink({path: file.path_display})
      .then(data => {
        resolve(data.link);
      })
      .catch(console.error);
  });
};

let getPaths = (folder) => {
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