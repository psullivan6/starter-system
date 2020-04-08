import React from 'react';

import Link from '../Link';
import Text from '../Text';

import { StyledCard } from './styles';

function Card({ headline, copy, link }) {
  return (
    <StyledCard>
      <StyledCard.Headline as="h1" variant="h1">
        {headline}
      </StyledCard.Headline>

      <StyledCard.HeadlineNoProps>{headline}</StyledCard.HeadlineNoProps>

      <Text>{copy}</Text>
      <Link href={link.href}>{link.text}</Link>
    </StyledCard>
  );
}

export default Card;
