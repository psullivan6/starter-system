import React from 'react';
import { ThemeProvider } from 'styled-components';

// Sections
import BoxTest from './sections/BoxTest';
import CustomTest from './sections/CustomTest';
import TypographyTest from './sections/TypographyTest';

// Styles
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TypographyTest />
      <BoxTest />
      <CustomTest />
    </ThemeProvider>
  );
}

export default App;
