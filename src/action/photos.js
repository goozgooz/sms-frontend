import fetch from 'isomorphic-fetch';
import {Dropbox} from 'dropbox';
const dbx = new Dropbox({accessToken: __DROPBOX_KEY__});

export default () => {
  console.log(dbx);
};