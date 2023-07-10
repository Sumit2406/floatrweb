 import React from "react";

export default function FileUploader({file1,uploadHandleChange}) {
        return (
<div className="App">
            <h2>Update Image</h2>
            <input type="file" onChange={uploadHandleChange} />
           {file1  && <img src={file1} alt="filename" style={{width:'100px', height:'50px'}}/> }  
</div>
  )
}

