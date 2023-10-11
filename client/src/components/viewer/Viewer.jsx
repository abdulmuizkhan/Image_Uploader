import React,{ useState, useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import './Viewer.css'
const Viewer = ({image_url}) => {

  const [text, setText] = useState('Copy Link');


  const copy_url=()=>{
    navigator.clipboard.writeText(image_url);
    setText('Copied to clipboard!')
    setTimeout(() => {
      setText('Copy Link');
    }, 3000);
  }

  return (
    <div class="container-viewer">
      <FaCheckCircle className="icon" />
    <p>Uploaded Successfully!</p>
    <div class="uploaded_image">
        <img src={image_url} alt="image"/>
    </div>
    <div className="copied_link">
      <div className="link">{image_url}</div>
      <button className='copy_button' onClick={copy_url}>{text}</button>
    </div>
</div>
  )
}

export default Viewer