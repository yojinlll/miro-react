const prefix = 'miro'

export const classNameHandler = (componentName: string) => {
  const scoped = `${prefix}-${componentName}`
  
  return function(className: string, ...args: any) {
    const concat1: string[] = []
    const concat2: string[] = []
    const all = [className, ...args]
    all.forEach(i => {
      if(Array.isArray(i)){
        Object.assign(concat1, i)
      }else{
        i && concat2.push(componentName === i ? scoped : `${scoped}-${i}`)
      }
    })
    return [...concat2, ...concat1.filter(Boolean)].join(' ')
  }
} 

export default classNameHandler