import React from 'react';

// Components
import Box from '../../components/Box';
import Text from '../../components/Text';

// Styles
import { Headline } from './styles';

const TypographyKey = () => (
  <table>
    <thead>
      <tr>
        <th>Key</th>
        <th>Tag</th>
        <th>Class variant</th>
        <th>Styled via</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01.</td>
        <td>
          <code>h1</code>
        </td>
        <td>
          <code>-</code>
        </td>
        <td>props</td>
      </tr>

      <tr>
        <td>02.</td>
        <td>
          <code>h2</code>
        </td>
        <td>
          <code>h3</code>
        </td>
        <td>props</td>
      </tr>

      <tr>
        <td>03.</td>
        <td>
          <code>p</code>
        </td>
        <td>
          <code>h3</code>
        </td>
        <td>props</td>
      </tr>

      <tr>
        <td>04.</td>
        <td>
          <code>p</code>
        </td>
        <td>
          <code>-</code>
        </td>
        <td>props</td>
      </tr>

      <tr>
        <td>05.</td>
        <td>
          <code>small</code>
        </td>
        <td>
          <code>small</code>
        </td>
        <td>props</td>
      </tr>

      <tr>
        <td>06.</td>
        <td>
          <code>h1</code>
        </td>
        <td>
          <code>h2</code>
        </td>
        <td>parent</td>
      </tr>

      <tr>
        <td>07.</td>
        <td>
          <code>h1</code>
        </td>
        <td>
          <code>h2</code>
        </td>
        <td>parent</td>
      </tr>
    </tbody>
  </table>
);

const Header = () => {
  return (
    <Box as="header" p={4}>
      <TypographyKey />

      <hr />

      <Text as="h1">01. Headline</Text>
      <Text as="h2" variant="h3">
        02. Headline
      </Text>
      <Text variant="h3">03. Subheadline</Text>
      <Text>04. Body</Text>
      <Text as="small" variant="small">
        05. Body
      </Text>

      <Headline>06. Headline</Headline>

      {/* https://styled-system.com/guides/removing-props-from-html/#styled-components */}
      <Headline fontWeight={100} color="rebeccapurple">
        07. Headline
      </Headline>
    </Box>
  );
};

export default Header;
