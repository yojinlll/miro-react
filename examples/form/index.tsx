import React, { Fragment, useState } from "react";
import { Form, FormValue, Validator, Button } from "@lib/index";
import Codebox from "../utils/codebox/index";

const nameStorage = ['bobo', 'mimi', 'jojo']

const formRules = {
  username: {
    required: true, message: '必填项',
    validator:(value: string, callback: Function)=>{
      // setTimeout(()=>{
        if(value.length > 10){
          callback('name max')
        }else if(value.length < 3){
          callback('name min')
        }else if(nameStorage.includes(value)){
          callback('name is exist')
        }else{
          callback()
        }
      // }, 2000)
    }
  },
  password: {
    required: true, message: '必填项',
    validator:(value: string, callback: Function)=>{
      setTimeout(()=>{
        if(value.length > 10){
          callback('password max')
        }else if(value.length < 3){
          callback('password min')
        }else{
          callback()
        }
      }, 2000)
    }
  }
}


const FormExample: React.FC = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: "",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: {type: 'text'} },
    { name: "password", label: "密码", input: { type: "text" } },
  ]);
  const [errors, setErrors] = useState({});

  const onFormDataChange = async (newValue: FormValue) => {
    setFormData(newValue)
    // const errors = await Validator(formData, formRules)
    // setErrors(errors)
    console.log('errors');
  };
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    const errors = await Validator(formData, formRules)
    setErrors(errors)
    console.log('get errors', errors);
    

    if(!Object.keys(errors).length){
      console.log('ajax post');
    }
  };

  return (
    <div>
      <Codebox codeString={"code"} header={"form"}>
        <div style={{maxWidth: 280}}>
          <Form
            value={formData}
            fields={fields}
            onChange={onFormDataChange}
            onSubmit={onFormSubmit}
            errors={errors}
            footer={
              <Fragment>
                <Button type="submit" style={{marginRight: 20}}>提交</Button>
                <Button type="reset" onClick={() => setErrors({})}>返回</Button>
              </Fragment>
            }
          />
        </div>
      </Codebox>
    </div>
  );
};

export default FormExample;
