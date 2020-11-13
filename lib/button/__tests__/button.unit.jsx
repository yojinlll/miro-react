import * as renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'

describe('button', ()=>{
  it('存在', ()=>{
    const json = renderer.create(<Button>button</Button>).toJSON()
    expect(json).toMatchSnapshot()
  })
})