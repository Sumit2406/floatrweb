import React, { useRef,useState} from 'react';
import uploadicon from "../assets/pngs/uploadicon.png"
// import ProfilePhoto from "../assets/pngs/ProfilePhoto.png";

import "../scss/components.scss"

//
export default function FileUploaderwithArrowIcon ({uploadHandler}) {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];  
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        uploadHandler(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
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
      <img src={uploadicon} alt="uploadicon" /></div>
      <div className='uploadinfo'>
      <p><b> Upload  </b></p>
      <p><b> Signature </b></p>
      <p>(.jpeg, .png)</p>
      {/* <img src={ProfilePhoto} alt="ProfilePhoto" /> */}
      </div>
      </>}
    </div>
  );
};
