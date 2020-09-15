import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon', ()=>{
  it('render icon', ()=>{
    const json = renderer.create(<Icon name='github' />).toJSON()
    expect(json).toMatchSnapshot()
  })
})