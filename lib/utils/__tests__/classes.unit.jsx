import classes from '../classes'

describe('classes', ()=>{
  it('第一个参数为组件名', ()=>{
    const result = classes('test')
    expect(result).toEqual('miro-test')
  })
  it('第二个参数为额外类名', ()=>{
    const result = classes('test', 'boo yoo')
    expect(result).toEqual('miro-test boo yoo')
  })
  it('第二个参数可为假值，且不显示', ()=>{
    const result = classes('test', undefined)
    expect(result).toEqual('miro-test')
  })
  it('第三个参数可更改默认 key ', ()=>{
    const result = classes('test', 'boo yoo', 'key')
    expect(result).toEqual('key-test boo yoo')
  })
  
}) 