import { mount } from 'enzyme'
import React from 'react'
import Modal from '../modal'

describe('Modal', () => {
  it('存在', () => {
    const wrapper = mount(<Modal visible />);
    expect(wrapper.render()).toMatchSnapshot();
  })
  it('onCancel should be called', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Modal visible onCancel={onCancel} />);
    wrapper.find('.miro-button').last().simulate('click');
    expect(onCancel).toHaveBeenCalled();
  })
  it('onConfirm should be called', () => {
    const onConfirm = jest.fn();
    const wrapper = mount(<Modal visible onConfirm={onConfirm} />);
    wrapper.find('.miro-button').first().simulate('click');
    expect(onConfirm).toHaveBeenCalled();
  })
})