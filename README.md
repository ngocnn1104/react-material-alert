# react-material-alert

> A ReactJS alert component built on Material UI

[![NPM](https://img.shields.io/npm/v/react-material-alert.svg)](https://www.npmjs.com/package/react-material-alert) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[Material-UI](https://material-ui.com/)

## Install

```bash
npm install --save react-material-alert
```

## Usage

```jsx
import React, { Component } from 'react'

import MaterialAlert from 'react-material-alert'

class Example extends Component {
  render () {
    return (
      <MaterialAlert text='This is a success alert' type='success' />
      <MaterialAlert text='This is a warning alert' type='warning' />
      <MaterialAlert text='This is an error alert' type='error' />
    )
  }
}
```

## License

MIT © [ngocnn1104](https://github.com/ngocnn1104)
