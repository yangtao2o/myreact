const express = require('express')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const App = class extends React.PureComponent {
  render() {
    return React.createElement('h1', null, 'hello world')
  }
}

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(React.createElement(App))
  console.log(content)
  res.send(content)
})

app.listen(3002)
