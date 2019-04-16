import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {Header, Footer} from './components'

// temp data
const projects = [
  {
    name: 'Fake server', url: 'https://github.com/potapovDim/json-fake-server'
  },
  {
    name: 'React eyedropper', url: 'https://github.com/potapovDim/react-eyedropper'
  },
  {
    name: 'React eyedropper', url: 'https://github.com/potapovDim/react-eyedropper'
  },
  {
    name: 'Selenium webdriver binding', url: 'https://github.com/potapovDim/awb'
  }
]

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        Hello from main component
        <Footer projects={projects} />
      </div>
    )
  }
}

ReactDom.render(<Main />, document.getElementById('app'))
