import { FormValue } from "./form";

type FormErrors  = {
  [K: string]: string | undefined
}
interface FormRules {
  [K: string]: FormRule
}
interface FormRule {
  required?: boolean
  message?: string
  validator?: (value: string | number, callback: Function) => void
}

export const Validator = (formValue: FormValue, rules: FormRules) => {
  const promiseList = Object.entries(rules).map(i => {
    return new Promise((resolve) => {
      const key = i[0]
      const rule = i[1]
      const value = formValue[key]

      if(rule.required && !value){
        resolve({ [key]: rule.message || 'required' })
      }else if(rule.validator){
        rule.validator(value, (errorMsg: string) => resolve({ [key]: errorMsg }) )
      }else{
        resolve({ [key]: null })
      }
    })
  })
  
  return Promise.all(promiseList).then(values => {
    const errors = values.reduce((pre,current:FormErrors)=>{
      return Object.assign(pre, Object.values(current)[0] ? current : {} )
    }, {}) as FormErrors

    return errors
  })
};

export default Validator;