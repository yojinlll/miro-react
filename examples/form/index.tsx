import React, { Fragment, useState } from "react";
import { Form, FormValue } from "@lib/index";
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

  const onFormDataChange = (newValue: FormValue) => {
    setFormDate(newValue)
  };
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
