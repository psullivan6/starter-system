import React from 'react';

// Components
import Text from '../../components/Text';

// Styles
import { Headline } from './styles';

const Header = () => {
  return (
    <header>
      <Text as="h1">Normal h1 tag</Text>
      <Text as="h2" variant="h1">
        h2 tag styled as an h3
      </Text>
      <Text>Raw Text component - p tag</Text>
      <hr />
      <Headline>
        Custom <code>{'<Text />'}</code> component styled via parent - h1 tag
      </Headline>

      {/* https://styled-system.com/guides/removing-props-from-html/#styled-components */}
      <Headline fontWeight={100} color="rebeccapurple">
        Custom <code>{'<Text />'}</code> component styled via parent & props -
        h1 tag
      </Headline>
    </header>
  );
};

export default Header;
