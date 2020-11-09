import React, { Fragment, useState } from "react";
import { Input } from "@lib/index";
import Codebox from "../utils/codebox/index"

const codeString = `
import { Input } from "miro-react-demo";

const InputDemo = () =>{
  const [value, setValue] = useState('')

  return <Input className="code-demo"
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
          />
}
`

const InputExample:React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <Fragment>
      <Codebox
        codeString={codeString}
        header={
          <Fragment>
            <h1>Input</h1>
          </Fragment>
        }
      >
        <p>value: {value}</p>
        <Input className="code-demo" value={value} onChange={(e)=>{setValue(e.target.value)}} />
      </Codebox>

      <h1>API</h1>
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
              <td>className</td>
              <td>自定义类名</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>输入框内容变化时的回调</td>
              <td>function(e)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default InputExample