import React from 'react';

// Components
import ViewOviever from './Videoviever';

const VidioList = ({ histories }) => (

  <ul>
    {histories.map(({ id, url }) => (
      <li key={id}>
          <ViewOviever url={url} />
      </li>
    ))}
  </ul>
);

export default VidioList;
 