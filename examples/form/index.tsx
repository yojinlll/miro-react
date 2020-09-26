import React, { Fragment, useState } from "react";
import { Form, FormValue, Validator, Button } from "@lib/index";
import Codebox from "../utils/codebox/index";

const FormExample: React.FC = () => {
  const [formData, setFormDate] = useState<FormValue>({
    username: "",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: { type: "text" } },
    { name: "password", label: "密码", input: { type: "text" } },
  ]);
  const [errors, setErrors] = useState({});

  const onFormDataChange = (newValue: FormValue) => {
    setFormDate(newValue)
  };
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = {
      username: {required: true, message: '必填项', validator:(value: string)=>{
        if(value.length > 10) return 'name max'
        if(value.length < 3) return 'name min'
        return
      }}
    }
    const errors = Validator(formData, rules)
    if(Object.keys(errors).length){
      console.log(errors);
      setErrors(errors)
    }else{
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
