import React from 'react';

import * as icons from '../icons';

export const Icons = () => (
  <>
    {Object.values(icons).map((Icon, index) => (
      <Icon key={index} color="orange" height={48} width={48} />
    ))}
  </>
);
