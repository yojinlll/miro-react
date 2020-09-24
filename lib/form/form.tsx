import React from "react";
// import classNameHandler from "../utils/classes";

// const ch = classNameHandler("icon");

export interface FormValue {
  [K: string]: any
}

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string; label: string; input: { type: string } }>;
  buttons: React.ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (value: FormValue) => void
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
    <form onSubmit={onSubmit}>
      {
        props.fields.map(f => {
          return (
          <div key={f.name}>
            { f.label }
            <input type={f.input.type} value={formValue[f.name]} onChange={onInputChange.bind(null, f.name)}/>
          </div>
          ) 
        })
      }
      { props.buttons }
    </form>
  );
};

export default Form;
