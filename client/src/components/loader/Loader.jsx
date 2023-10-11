import React from 'react'
import './Loader.css'
const Loader = () => {
  return (
     <div className="container-loader">
        <div className="uploading">
        <p>Uploading...</p>
        </div>
        <div className="progress_bar">
           <div className="progress">
           </div>
        </div>
     </div>
  )
}

export default Loader