import styled from 'styled-components';
import Box, { Flex } from '../../components/Box';
import themeGet from '../../utilities/themeGet';

export const CustomBox = styled(Box)`
  margin: ${themeGet('space.4')};
  padding: ${themeGet('space.5')};
  background: azure;
  border: 1px solid rebeccapurple;
`;

export const CustomFlex = styled(Flex)`
  margin: ${themeGet('space.4')};
  padding: ${themeGet('space.5')};
  background: azure;
  border: 1px solid red;
`;
