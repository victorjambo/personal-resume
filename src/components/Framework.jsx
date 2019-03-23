import React from 'react';

const Framework = ({frameworks}) => {
  const list = frameworks.map(framework => (<li key={framework}><span>{framework}</span></li>))
  return(
  <ul>
    {list}
  </ul>
)};

export default Framework;
