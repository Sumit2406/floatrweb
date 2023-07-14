import React, { useRef,useState} from 'react';
import uploadicon from "../assets/pngs/Vector.png";
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
      {!uploadedImage && <><img src={uploadicon} alt="uploadicon" />
      <br/>
      <p><b> Upload Signature </b></p>
      <p>(.jpeg, .png)</p></>}
    </div>
  );
};

export default FileUploader;