import * as renderer from 'react-test-renderer'
import React from 'react'
import Input from '../input'

describe('input', ()=>{
  it('存在', ()=>{
    const json = renderer.create(<Input />).toJSON()
    expect(json).toMatchSnapshot()
  })
})