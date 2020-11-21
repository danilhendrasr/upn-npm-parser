# UPN NPM Parser
Parse the student ID of UPN Jatim's students.

## Install
```bash
# npm
npm i upn-npm-parser

# yarn
yarn add upn-npm-parser
```

## Usage
```js
// commonjs
const {parseNpm} = require('upn-npm-parser');

// ES Modules
import {parseNpm} from 'upn-npm-parser';

const parseResult = parseNpm("19081010016");
```

## Develop
```bash
# Install dependencies
yarn

# Build
yarn build

# Build with watch mode
yarn watch

# Run tests
yarn test
```
