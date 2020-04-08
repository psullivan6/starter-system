import styled from 'styled-components';
import themeGet from '../../utilities/themeGet';

import Box from '../Box';
import Text, { StyledText } from '../Text';

export const StyledCard = styled(Box)`
  padding: ${themeGet('space.4')};
`;

// StyledCard.Headline = styled(StyledText)`
//   background: #ccc;
// `;

// [TODO] Figure out how to do an h1 styled as an h1 without having to declare BOTH as and variant
StyledCard.HeadlineNoProps = styled(StyledText).attrs(() => ({
  as: 'h1',
  variant: 'h1',
}))`
  background: #ccc;
`;

StyledCard.Headline = styled(StyledText)`
  background: #ccc;
`;
