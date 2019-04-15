import React, {Component} from 'react'
import {Link} from '../commons'

class Footer extends Component {
  render() {
    const {projects} = this.props
    return (
      <div>{projects.map((project, index) => <Link key={index} {...project} />)}</div>
    )
  }
}

export {Footer}
