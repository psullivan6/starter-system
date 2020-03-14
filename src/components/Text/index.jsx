import React from 'react';
import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';

const Text = styled.p`
  ${variant({
    variants: {
      small: {
        fontSize: '0.75rem'
      },
      p: {
        fontSize: '1rem',
        lineHeight: 1.25
      },
      h6: {
        fontSize: '1rem'
      },
      h5: {
        fontSize: '1.25rem'
      },
      h4: {
        fontSize: '1.5625rem'
      },
      h3: {
        fontSize: '1.9375rem'
      },
      h2: {
        fontSize: '2.4375rem'
      },
      h1: {
        marginTop: 0,
        fontSize: '3.0625rem'
      }
    }
  })}
  ${color};
  ${space};
  ${typography};
`;

Text.defaultProps = {
  lineHeight: 1,
  variant: 'p'
};

const propsResolver = props => {
  if (props.as != null && props.variant == null) {
    return <Text variant={props.as} {...props} />;
  }

  return <Text {...props} />;
};

export default propsResolver;
