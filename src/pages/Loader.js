import React, { useState } from 'react';
const Loader = props => {
  const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
  const [color, setColor] = useState(props.color);
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }} className='loader1'>
      <span
        style={{
          border: `5px solid var(${
            color ? '--primary-darker' : '--backgound-1'
          })`,
        }}
        className='loader__element'
      ></span>
      <span
        style={{
          border: `5px solid var(${
            color ? '--primary-darker' : '--backgound-1'
          })`,
        }}
        className='loader__element'
      ></span>
      <span
        style={{
          border: `5px solid var(${
            color ? '--primary-darker' : '--backgound-1'
          })`,
        }}
        className='loader__element'
      ></span>
    </div>
  );
};

export default Loader;
