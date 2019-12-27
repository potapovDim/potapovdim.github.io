import React, {Component} from 'react'
import {Link} from '../commons'

class Footer extends Component {
  render() {
    const {projects = [], socialNetworks = []} = this.props
    return (
      <div>
        <div>{projects.map((project, index) => <Link key={index} {...project} />)}</div>
        <div>{socialNetworks.map((project, index) => <Link key={index} {...project} />)}</div>
      </div>
    )
  }
}

export {Footer}
