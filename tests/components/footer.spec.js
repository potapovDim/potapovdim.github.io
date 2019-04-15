import React from 'react'
import {Footer} from '../../src/components/footer'
import {shallow} from 'enzyme'
import {expect} from 'chai'

describe('Footer', () => {
  const el = shallow(<Footer {...{
    projects: [{
      name: 'Test', url: 'https://test.test.com'
    }]
  }} />)

  it('props', () => {
    expect(el.html()).to.include('span')
  })
})
