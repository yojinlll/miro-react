import { FormValue } from "./form";

interface FormRules {
  [K: string]: FormRule
}
interface FormRule {
  required?: boolean
  message?: string,
  validator?: (value: string | number) => string | undefined
}

interface FormErrors {
  [K: string]: string[]
}


export const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  const errors: FormErrors = {}
  Object.keys(rules).map(key => {
    errors[key] = []
    const value = formValue[key]
    const rule = rules[key]

    if(rule.required && !value){
      errors[key].push(rule.message || 'required')
    }
    if(rule.validator){
      const error = rule.validator(value)
      error && errors[key].push(error)
    }
  })

  return errors
};

export default Validator;