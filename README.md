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

  - For testing we have installed the following packages 
  1. `enzyme`
  2. `enzyme-to-json`
  3. We created `setupTests.js`, `jes.config.json` - this was to automate the toJSON meaning we won't have to write `toJSON()` whenever we snapshot 