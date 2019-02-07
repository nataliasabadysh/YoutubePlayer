import React from 'react';

const ViewOviever = ({ url }) => console.log("url", url) || (
   <div>
       <video 
          width="320" 
          height="240" 
          controls
       >
      <source src={url} type="video/mp4" />  
     
   </video> 

<button>{url}</button>
   </div>
);

export default ViewOviever;
 