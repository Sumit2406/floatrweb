import React, { useRef,useState} from 'react';
import ProfilePhoto from "../assets/pngs/ProfilePhoto.png";
import "../scss/components.scss"

//
const FileUploader = ({uploadHandler}) => {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      setUploadedImage(e.target.result);
      uploadHandler(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="upload-div"
      style={{ backgroundImage: `url(${uploadedImage})`}}
      onClick={handleDivClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg"
      />
      {!uploadedImage && 
      <> 
      <div className='uploadicon'>
      {/* <img src={uploadicon} alt="uploadicon" /></div>
      <div className='uploadinfo'>
      <p><b> Upload  </b></p>
      <p><b> Signature </b></p>
      <p>(.jpeg, .png)</p> */}
      <img src={ProfilePhoto} alt="ProfilePhoto" />
      </div>
      </>}
    </div>
  );
};

export default FileUploader;