import fetch from 'isomorphic-fetch';
import {Dropbox} from 'dropbox';
const dbx = new Dropbox({
  accessToken: __DROPBOX_KEY__,
  fetch: fetch,
});

export default () => {
  dbx.filesListFolder({path:''})
    .then(console.log)
    .catch(console.error);
};