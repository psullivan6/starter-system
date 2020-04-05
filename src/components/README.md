# Components

## Adding a new Component

A new component needs to either default export a `styled.` component OR accept those props.

`const Foo = styled(Box)`
OR
`const Foo = styled.div`
OR

```
const Foo = ({ props, we, know, about, ...rest }) => (
  <div {...rest}></div>
);
```
