import { useState } from 'react';
import './App.css';

import {Uploader,Loader,Viewer} from './components'

const App=()=>{
     
     const [uploader,set_uploader]=useState(true);
     const [is_uploading,set_is_uploading]=useState(false);
     const [is_uploaded,set_is_uploaded]=useState(false);
     const [image_url,set_image_url]=useState(null);

     const uploading=()=>{
        set_uploader(false);
        set_is_uploading(true);
        set_is_uploaded(false);
     }
     const uploaded=(url)=>{
        set_uploader(false);
        set_is_uploading(false);
        set_is_uploaded(true);
        set_image_url(url);
     }
     

    return(
     <div className="App">
     {uploader && <Uploader uploading={uploading} uploaded={uploaded}/>}
     {is_uploading&&<Loader/>}
     {is_uploaded && <Viewer image_url={image_url}/>}
     </div>
    )
}

export default App;
