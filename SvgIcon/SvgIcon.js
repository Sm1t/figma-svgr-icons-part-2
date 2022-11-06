import React, { forwardRef } from 'react';
import { node, oneOf } from 'prop-types';

const colors = {
  error: '#ef5350',
  info: '#03a9f4',
  warning: '#ff9800',
}

const sizes = {
  'small': 20,
  'large': 35,
}

export const SvgIcon = ({
  children, color, height, size, width, ...props
}) => {
  return (
    <svg
      {...props}
      color={colors[color] || color}
      height={sizes[size] || height}
      width={sizes[size] || width}
    >
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  children: node,
  color: oneOf(Object.keys(colors)),
  size: oneOf(Object.keys(sizes)),
};
