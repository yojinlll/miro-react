import React, { Fragment, useState } from "react";
import { Form, FormValue, Validator } from "@lib/index";
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
    setErrors(errors)
    console.log('errors', errors);
    console.log('ajax post:', formData);
  };

  return (
    <div>
      <Codebox codeString={"code"} header={"form"}>
        <Form
          value={formData}
          fields={fields}
          onSubmit={onFormSubmit}
          onChange={onFormDataChange}
          errors={errors}
          buttons={
            <Fragment>
              <button type={"submit"}>提交</button>
              <button>返回</button>
            </Fragment>
          }
        />
      </Codebox>
    </div>
  );
};

export default FormExample;
