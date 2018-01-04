import React from 'react';

const Query = ({value, onChange}) => {
  return (
    <input type="text" value={value} onChange={onChange}/>
  );
};

export default Query;
