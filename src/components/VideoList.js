import React from 'react';

// Components
import Videoviever from './Videoviever';

const VidioList = ({ histories }) =>   console.log( 'histories', histories) || (

  <ul>
    {histories.map(({ id, url }) => (
      <li key={id}>
          <Videoviever url={url} />
      </li>
    ))}
  </ul>
);

export default VidioList;
 