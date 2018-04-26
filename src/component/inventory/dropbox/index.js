import React from 'react';
import Dropbox from 'dropbox';

const token = __ACCESS_TOKEN__;

class DropboxChooser extends React.Component{
  constructor(props){
    super(props);
    
    this.download = this.download.bind(this);
  }
  
  download(folder){
    let dbx = new Dropbox.Dropbox({accessToken: token});
    dbx.filesListFolder({path:'/pets'})
      .then(data => {
        return data.entries.map(i => {
          return i.name;
        });
      })
      .then(photos => {
        for(let photo of photos){
          dbx.filesDownload({path:`/pets/${photo}`})
            .then(console.log)
            .catch(console.log);
        }
        
      })
      .catch(console.log);
  }

  
  
  render(){
    
    this.download();
    return(
      <h2> button </h2>
    );
  }
}

export default DropboxChooser;


// https://www.dropbox.com/developers/documentation/http/documentation#sharing-get_shared_link_file
// https://www.dropbox.com/developers/documentation/http/documentation