import React from 'react';
import styled from 'styled-components';

const Anchor = styled.a``;

const Link = ({ href, children, ...rest }) => (
  <Anchor href={href} {...rest}>
    {children}
  </Anchor>
);

export default Link;
