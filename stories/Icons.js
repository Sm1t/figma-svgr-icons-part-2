import React from 'react';

const iconsContext = require.context('../icons', false, /\.js$/);

export const Icons = () => {
  return (
    <>
      {iconsContext
        .keys()
        .filter(file => file !== './index.js')
        .map((icon, index) => {
          const Component = iconsContext(icon).default;

          return <Component key={index} style={{
            color: "orange", height: 48, width: 48
          }} />;
        })}
    </>
  )
}