# sucrase-register

A node.js require hook for jsx, import (etc) using [sucrase](https://github.com/alangpierce/sucrase)

## Installation

```shell
yarn add sucrase-register
```

## example

```js
require('sucrase-register')({ transforms: ['jsx'] })

const Component = require('/.component.jsx')
```
