import * as renderer from 'react-test-renderer'
import {mount} from 'enzyme'
import React from 'react'
import Icon from '../icon'

describe('icon', ()=>{
  it('render', ()=>{
    const json = renderer.create(<Icon name='github' />).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', ()=>{
    // let n = 1
    // const fn = ()=>{ n = 2 }
    const fn = jest.fn()
    const component = mount(<Icon name='github' onClick={fn} />)
    component.find('svg').simulate('click')
    // expect(fn).toEqual(2)
    expect(fn).toBeCalled()
  })
})