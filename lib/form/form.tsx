import React from "react";
import { Input } from "@lib/index";
import classNameHandler from "../utils/classes";
import "./form.scss"

const ch = classNameHandler("form");

export interface FormValue {
  [K: string]: any
}

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  footer: React.ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
  errors: {[K: string]: string[]}
}

const Form: React.FC<FormProps> = (props) => {
  const formValue = props.value
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()  // 阻止表单提交的默认刷新
    props.onSubmit(e)
  }
  const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormValue = {...formValue, [name]: e.target.value}
    props.onChange(newFormValue)
  }

  return (
    <form className={ch("form")} onSubmit={onSubmit}>
      <table>
        <tbody>
          {
            props.fields.map(f => {
              return (
                <tr className={ch("tr")} key={f.name}>
                  <td className={ch("td")}>
                    <label className={ch('label')}>{ f.label }</label>
                  </td>
                  <td className={ch("td")}>
                    <Input type={f.input.type} value={formValue[f.name]} onChange={onInputChange.bind(null, f.name)}/>
                    <span>{props.errors[f.name] && props.errors[f.name][0]}</span>
                  </td>
                </tr>
              ) 
            })
          }
          <tr>
            <td className={ch("tr")} />
            <td className={ch("tr")}>
              { props.footer }
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Form;
export { default as Validator } from "./validator";