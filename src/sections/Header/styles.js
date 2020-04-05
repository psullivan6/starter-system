import styled from 'styled-components';
import { StyledText } from '../../components/Text';
import themeGet from '../../utilities/themeGet';

export const Headline = styled(StyledText).attrs(() => ({
  as: 'h1',
  variant: 'h1'
}))`
  background: #ccc;
  padding: ${themeGet('space.4', '20px')};
`;
