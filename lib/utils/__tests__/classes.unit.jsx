import classNameHandler from '../classes'

// 定义组件名为 modal
const ch = classNameHandler('modal')

describe('classes - ch', ()=>{
  it('与组件名同名', ()=>{
    const result = ch('modal')
    expect(result).toEqual('miro-modal')
  })
  it('与组件名不同名', ()=>{
    const result = ch('title')
    expect(result).toEqual('miro-modal-title')
  })
  it('通过数组自定义类名', ()=>{
    const result = ch('header', 'header-close', ['m-header'])
    expect(result).toEqual('miro-modal-header miro-modal-header-close m-header')
  })
  it('传入假值', ()=>{
    const result = ch('footer', undefined, 'footer-buttons', null, 0, [undefined, 'm-footer', null])
    expect(result).toEqual('miro-modal-footer miro-modal-footer-buttons m-footer')
  })
}) 