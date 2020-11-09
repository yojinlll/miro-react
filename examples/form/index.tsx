import React, { Fragment, useState } from "react";
import { Form, FormValue, Validator, Button } from "@lib/index";
import Codebox from "../utils/codebox/index";

const codeString1 = `
import { Form, Button } from "miro-react-demo";

const FormDemo = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: {type: 'text'} },
    { name: "password", label: "密码", input: { type: "text" } },
  ]);

  const onFormChange = (newValue) => {
    setFormData(newValue)
  };
  const onFormSubmit = (e) => {
    alert(\`ajax post: \${JSON.stringify(formData)}\`)
  };

  return <Form
    value={formData}
    fields={fields}
    onChange={onFormChange}
    onSubmit={onFormSubmit}
    footer={
      <Fragment>
        <Button type="submit" style={{marginRight: 20}}>提交</Button>
        <Button type="reset">返回</Button>
      </Fragment>
    }
  />
}
`

const codeString2 = `
import { Form, Button } from "miro-react-demo";

const nameStorage = ['bobo', 'nono', 'jojo']

const FormDemo = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: {type: 'text'} },
    { name: "password", label: "密码", input: { type: "text" } },
  ]);
  const [errors, setErrors] = useState({});

  const formRules = {
    username: {
      required: true, message: '必填项',
      validator:(value: string, callback: Function)=>{
        // setTimeout(()=>{
          if(value.length > 10){
            callback('太长')
          }else if(value.length < 3){
            callback('太短')
          }else if(nameStorage.includes(value)){
            callback('已存在')
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
            callback('太长')
          }else if(value.length < 3){
            callback('太短')
          }else{
            callback()
          }
        }, 2000)
      }
    }
  }

  const onFormChange = (newValue) => {
    setFormData(newValue)
  };
  const onFormSubmit = async (e) => {
    const errors = await Validator(formData, formRules)

    setErrors(errors)
    
    if(!Object.keys(errors).length){
      alert(\`ajax post: \${JSON.stringify(formData)}\`)
    }
  };

  return <Form
    value={formData}
    fields={fields}
    onChange={onFormChange}
    onSubmit={onFormSubmit}
    errors={errors}
    footer={
      <Fragment>
        <Button type="submit" style={{marginRight: 20}}>提交</Button>
        <Button type="reset">返回</Button>
      </Fragment>
    }
  />
}
`

const nameStorage = ['bobo', 'nono', 'jojo']

const formRules = {
  username: {
    required: true, message: '必填项',
    validator:(value: string, callback: Function)=>{
      // setTimeout(()=>{
        if(value.length > 10){
          callback('太长')
        }else if(value.length < 3){
          callback('太短')
        }else if(nameStorage.includes(value)){
          callback('已存在')
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
          callback('太长')
        }else if(value.length < 3){
          callback('太短')
        }else{
          callback()
        }
      }, 2000)
    }
  }
}


const FormExample: React.FC = () => {
  const [formData1, setFormData1] = useState<FormValue>({
    username: "",
    password: "",
  });
  const [formData2, setFormData2] = useState<FormValue>({
    username: "bobo",
    password: "12",
  });
  const [fields] = useState([
    { name: "username", label: "用户名", input: {type: 'text'} },
    { name: "password", label: "密码", input: { type: "text" } },
  ]);
  const [errors2, setErrors2] = useState({});

  const onFormChange1 = (newValue: FormValue) => {
    setFormData1(newValue)
  };
  const onFormSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    alert(`ajax post: ${JSON.stringify(formData1)}`)
  };


  const onFormChange2 = (newValue: FormValue) => {
    setFormData2(newValue)
    console.log('errors');
  };
  const onFormSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
    const errors = await Validator(formData2, formRules)
    setErrors2(errors)
    if(!Object.keys(errors).length){
      alert(`ajax post: ${JSON.stringify(formData2)}`)
    }
  };

  return (
    <Fragment>
      <Codebox
        codeString={codeString1}
        header={
          <Fragment>
            <h1>Form</h1>
            <p>基本使用</p>
          </Fragment>
        }
      >
        <div style={{maxWidth: 280}}>
          <Form
            value={formData1}
            fields={fields}
            onChange={onFormChange1}
            onSubmit={onFormSubmit1}
            footer={
              <Fragment>
                <Button type="submit" style={{marginRight: 20}}>提交</Button>
                <Button type="reset">返回</Button>
              </Fragment>
            }
          />
        </div>
      </Codebox>

      <Codebox
        codeString={codeString2}
        header={
          <Fragment>
            <p>自定义校验（可异步）</p>
          </Fragment>
        }
      >
        <div style={{maxWidth: 280}}>
          <p>nameStorage: ['bobo', 'nono', 'jojo']</p>
          <Form
            value={formData2}
            fields={fields}
            onChange={onFormChange2}
            onSubmit={onFormSubmit2}
            errors={errors2}
            footer={
              <Fragment>
                <Button type="submit" style={{marginRight: 20}}>提交</Button>
                <Button type="reset" onClick={() => setErrors2({})}>返回</Button>
              </Fragment>
            }
          />
        </div>
      </Codebox>

      <h1>API</h1>
      <p>Form</p>
      <div className="api-wrap">
        <table className="api-table">
          <thead>
            <tr>	
              <th>参数</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>表单控件值</td>
              <td>{'Object<{ key: String | Number }>'}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>fields</td>
              <td>表单控件名字标签名以及控件本身</td>
              <td>{'Array<{ name: 表单控件值的 key, label: 标签名, input: { type } | 自定义输入控件 }>'}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>footer</td>
              <td>表单操作按钮</td>
              <td>React.ReactFragment</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>输入框内容变化时的回调</td>
              <td>{'( FormValue ) => void'}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onSubmit</td>
              <td>提交表单且数据验证成功后回调事件</td>
              <td>React.FormEventHandler</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default FormExample;
