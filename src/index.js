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
    name: 'Selenium webdriver binding', url: 'https://github.com/potapovDim/awb'
  }
]

const socialNetworks = [
  {
    name: 'Facebook', url: 'https://www.facebook.com/dima.potapov.33',
  },
  {
    name: 'Youtube', url: 'https://www.youtube.com/channel/UC4ZVfrsYNgi3WNSQl5IrICQ'
  },
  {
    name: 'LinkedIn', url: 'https://www.linkedin.com/in/dmytro-potapov-b15183101/'
  }
]

class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        Hello from main component
        <Footer projects={projects} socialNetworks={socialNetworks} />
      </div>
    )
  }
}

ReactDom.render(<Main />, document.getElementById('app'))
