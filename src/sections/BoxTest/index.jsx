import React from 'react';

import Box, { Flex } from '../../components/Box';
import Link from '../../components/Link';
import Text from '../../components/Text';

import { CustomBox, CustomFlex } from './styles';

const BoxTest = () => (
  <section>
    <Box backgroundColor="#ccc" margin={4} padding={4}>
      <Text>Everything else that needs styled-system styles can be a box</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        animi voluptatem iusto debitis culpa iste cupiditate quibusdam veniam ad
        velit fugit quidem labore minima eos quasi accusantium, perspiciatis
        expedita aut?
      </Text>
      <Box as={Link} href="/" backgroundColor="#333" color="#fff">
        Click Here Link
      </Box>
      <Link as={Box} href="/" backgroundColor="#fff" color="#333">
        Click Here Link
      </Link>
    </Box>

    <Flex
      m={4}
      p={5}
      backgroundColor="azure"
      border="1px solid"
      borderColor="blue"
    >
      Regular Flex
    </Flex>

    <CustomFlex>Custom Styled Flex</CustomFlex>
    <CustomBox>Custom Styled Box</CustomBox>
  </section>
);

export default BoxTest;
