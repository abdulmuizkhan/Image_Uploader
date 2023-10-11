import React, { useState } from 'react'
import axios from 'axios';
import './Uploader.css'
import Image from './image.svg'




const Uploader = ({uploading,uploaded}) => {

   const [selected_image_url,Set_selected_image_url]=useState(null);

   const handleFileselect=async(event)=>{
    const selected_file=event.target.files[0];
    const formData = new FormData();
    formData.append('file', selected_file,'file');
    
    console.log('selected file:',selected_file);
    uploading();
    return axios.post('http://localhost:5000/upload',formData)
    .then(async(res)=>{
      Set_selected_image_url(res.data.secure_url)
      console.log(res.data.secure_url)
      uploaded(res.data.secure_url);
    }
    )
    .catch(err=>console.log(err))

}

const hanldeDrop=(event)=>{
    event.preventDefault();
    const dropped_file=event.dataTransfer.files[0];
    
    const formData = new FormData();
    formData.append('file', dropped_file,'file');

    uploading();
    return axios.post('http://localhost:5000/upload',formData)
    .then(async(res)=>{
      Set_selected_image_url(res.data.secure_url)
      console.log(res.data.secure_url)
      uploaded(res.data.secure_url);
    }
    )
    .catch(err=>console.log(err))


}

const handleDrag=(event)=>{
event.preventDefault();
}

  return (
    <div class="container">
    <h1>Upload your image</h1>
    <p style={{color:'#979595'}}>File should be Jpeg,Png...</p>
    <div class="image_container" onDrop={hanldeDrop} onDragOver={handleDrag}>
        <img src={Image} alt="image"/>
        <p style={{color:'#a7a9ab'}}>Drag & Drop your image here</p>
    </div>
    <p style={{color:'#a7a9ab'}}>or</p>
    
    <label>Choose a file <input type="file" onChange={handleFileselect}/></label>
    
</div>
  )

}

export default Uploader