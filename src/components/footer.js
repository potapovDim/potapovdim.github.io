import React, {Component} from 'react'

class Footer extends Component {
  render() {
    const {projects} = this.props
    const links = projects.map(({name, url}, index) => <span key={index}>{name} &nbsp {url}</span>)
    return (
      <div>{links}</div>
    )
  }
}

export {Footer}
