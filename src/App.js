import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import Box, { Flex, FlexAttrs } from './components/Box';
import Link from './components/Link';
import Text from './components/Text';

// Sections
import Header from './sections/Header';

// Styles
import theme from './styles/theme';

// Assets
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />

        <section>
          <Text as="h1">H1 tag</Text>
          <Text variant="h3" as="h1">
            H1 tag with h3 styles
          </Text>
          <Text variant="h3">default tag (p) with h3 styles</Text>
          <Text>default tag (p) no props</Text>
          <Text as="p" variant="small">
            Small paragraph text
          </Text>
          <Box backgroundColor="#ccc" margin={4} padding={4}>
            Everything else that needs styled-system styles can be a box
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus animi voluptatem iusto debitis culpa iste cupiditate
              quibusdam veniam ad velit fugit quidem labore minima eos quasi
              accusantium, perspiciatis expedita aut?
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
            <div>Is this centered</div>
          </Flex>

          <FlexAttrs
            m={4}
            p={5}
            backgroundColor="azure"
            border="1px solid"
            borderColor="blue"
          >
            <div>Is this centered</div>
          </FlexAttrs>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
