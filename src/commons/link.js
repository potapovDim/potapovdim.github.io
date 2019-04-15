import React from 'react'

function Link({name, url}) {
  return (<span> {url ? <a href={url}>{name}</a> : name}</span>)
}

export {Link}
