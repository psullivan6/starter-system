import React from 'react';

// Components
import Box from './components/Box';
import Text from './components/Text';

// Assets
import './App.css';

function App() {
  return (
    <div className="App">
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
        </Box>
      </section>
    </div>
  );
}

export default App;
