# Code Patterns

## File organization

- Directories at the "root" (`src/`) are types of things:
  - `components/` - global, atomic React components
  - `utilities/` - global, single purpose utility functions, helpers, mixins, variables, etc...
  - `services/` - global API and state interaction layers
  - `hooks/` - global custom React hooks
  - `styles/` - global styles only; component-specific styles are nested
  - `sections/`: groups composed with smaller, atomic components, creating larger, molecular "sections"

  - `components/index.jsx`
    - "Table of contents" index of all components, re-exported for easier consumption throughout the app

  - `components/[Component]/index.jsx`
    - `export default` the primary component
    - `export *` any other named components, variables, etc... as needed
  - `components/[Component]/styles.js`
    - `export const Name = styled...` - named styled-component exports
  - `components/[Component]/index.test.js` - react-testing-library test file as needed