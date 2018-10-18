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

export default () => {
  Promise.all(folders.map(getPaths))
    .then(paths => {
      return paths.map(getImg);
    })
    .then(console.log)
    .catch(console.error);
};


let getImg  = (path) => {
  Promise.all(path.map(i => {
    dbx.filesGetTemporaryLink({path: i.path_display})
      .then(data => {
        return data.link;
      })
      .catch(console.error);
  }));
};


let getPaths = (folder) => {
  return new Promise((resolve,reject) => {
    dbx.filesListFolder({path: `/${folder}`})
      .then(data => {
        resolve(data.entries);
      })
      .catch(console.error);
  });
};