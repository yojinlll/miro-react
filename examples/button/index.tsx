import React, { Fragment } from 'react'
import { Button } from "@lib/index";
import Codebox from "../utils/codebox"

const codeString = `
import { Button } from "miro-react-demo";

const ButtonDemo = ()=>{
  return (
    <Fragment>
      <Button style={{ marginRight: 12 }}>button</Button>
      <Button disabled>disabled</Button>
    </Fragment>
  )
`

const ButtonExample:React.FC = () => {
  return (
    <Fragment>
      <Codebox
        codeString={codeString}
        header={
          <Fragment>
            <h1>Button</h1>
            <p>基本样式</p>
          </Fragment>
        }
      >
        <Button style={{ marginRight: 12 }}>button</Button>
        <Button disabled>disabled</Button>
      </Codebox>

      <h1>API</h1>
      <p>继承 { '<button>' } 属性  </p>
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
              <td>style</td>
              <td>自定义样式</td>
              <td>React.CSSProperties	</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default ButtonExample