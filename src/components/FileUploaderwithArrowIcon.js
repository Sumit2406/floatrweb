import React, { useRef,useState} from 'react';
import uploadicon from "../assets/pngs/uploadicon.png"
import "../scss/components.scss"

//
export default function FileUploaderwithArrowIcon ({uploadHandler}) {
  const fileInputRef = useRef(null);
  const [uploadedImage1, setUploadedImage] = useState(null);
  
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
      className="upload-div-icond"
      style={{ backgroundImage: `url(${uploadedImage1})`}}
      onClick={handleDivClick}
    >
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        accept=".png, .jpg, .jpeg"
      />
      <div className='uploadcontainer'>
      {!uploadedImage1 && 
      <> 
      <div className='uploadicond'>
      <img src={uploadicon} alt="uploadicon" />
      </div>
      <div className='uploadinfo'>
      <p> Upload Signature </p>
      <p>(.jpeg, .png)</p>
      </div>
      </>}
      </div>
    </div>
  );
};
