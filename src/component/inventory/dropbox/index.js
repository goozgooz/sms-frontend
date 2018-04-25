import React from 'react';
import Dropbox from 'dropbox';

const token = __ACCESS_TOKEN__;

class DropboxChooser extends React.Component{
  constructor(props){
    super(props);
    
    this.download = this.download.bind(this);
  }
  
  download(){
    let dbx = new Dropbox.Dropbox({accessToken: token});
    console.log({dbx});
  }

  
  
  render(){
    
    this.download();
    return(
      <h2> button </h2>
    );
  }
}

export default DropboxChooser;