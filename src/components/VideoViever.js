import React from 'react';

const VidioList = ({ url }) => (
          <video 
                width="320" 
                height="240" 
                controls
             >
            <source src={url} type="video/mp4" />   
         </video> 
);

export default VidioList;
 