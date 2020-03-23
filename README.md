## To run the app locally on your machine with live server do the below commands
`yarn run dev-server`

### Plugins for Babel
`yarn add babel-plugin-transform-object-rest-spread@6.23.0` 
 - Spread allows you to do the below
  ```
  const user = {
    name: 'Max',
    age: 22
  };

  console.log({
    age: 27,
    ...user,
    location: 'Melbourne'
  })
  ```
`yarn add @babel/plugin-proposal-class-properties --dev`

- TESTING
  - To run testing put `yarn run test`
  - To run tests with watch put `yarn test -- --watch`