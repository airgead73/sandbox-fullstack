import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from './../../contexts';

const UploadImg = (props) => {  
  const { title } = props;
  const { formStatus } = useContext(FormContext);

  const [fileName, setFileName] = useState('');
  const [previewSrc, setPreviewSrc] = useState('');

  const handleFileChange = (e) => {

    const file = e.target.files[0];
    previewFile(file);

  } 

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSrc(reader.result);
      setFileName(file.name);
    }
  }



  useEffect(() => {

    if(formStatus === 'success') {
      setFileName('');
    }

  },[formStatus])
  
  return ( 
    <label 
      htmlFor={title} 
      className="field" 

    >
      <span className="field__title">{title}</span>
      <input 
        type="file"
        name={title}
        id={title}
        className="field__content field--file"
        previewsrc={previewSrc}
        filename={fileName}
        onChange={handleFileChange}
      />
      {previewSrc && (
        <img src={previewSrc} alt="chosen file" style={{height: '300px'}}/>
      )}
    </label>
   );
}
 
export default UploadImg;