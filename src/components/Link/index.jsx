import React from 'react';

import { Anchor } from './styles';

const Link = ({ href, children, ...props }) => (
  <Anchor href={href} {...props}>
    {children}
  </Anchor>
);

export default Link;
