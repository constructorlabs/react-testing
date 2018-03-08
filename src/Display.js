import React from 'react';

function Display(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  )
};

export default Display;
