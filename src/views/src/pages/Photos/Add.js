import React from 'react';
import { useLayout } from './../../layout';
import { serverStem } from './../../config'

const Add = () => {
  const [fileInputState, setFileInputState] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState('');
  const [previewSource, setPreviewSource] = React.useState('');

  useLayout('add');

  const handleFileInputChange = (e) => {

    const file = e.target.files[0];
    previewFile(file);

  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault();
    uploadImage(previewSource);

  }

  const uploadImage = async (base64encodedImage) => {
    try {

      await fetch(`${serverStem}/api/photos`, {
        method: "POST",
        body: JSON.stringify({ data: base64encodedImage}),
        headers: { 'Content-type': 'application/json'}
      });

    } catch(err) {
      console.error(err);
    }
  }



  return ( 

    <React.Fragment>

      <form onSubmit={handleSubmitFile}>
        <legend>add photo</legend>
        <input 
          type="file"
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <button type="submit">add</button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen image" style={{height: '300px'}}/>
      )}
    </React.Fragment>
    
  
   );
}
 
export default Add;