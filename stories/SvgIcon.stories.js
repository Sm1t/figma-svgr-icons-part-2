import React from 'react';

import { SvgIcon } from '../SvgIcon';

export default {
  title: 'SvgIcon',
  component: SvgIcon,
};

const Template = (args) => (
  <SvgIcon width={24} height={24} viewBox="0 0 24 24" {...args}>
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
  </SvgIcon>
);

export const Playground = Template.bind({});