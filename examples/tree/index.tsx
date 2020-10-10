import React, { useState } from 'react'
import { Tree } from "@lib/index";
import Codebox from "../utils/codebox/index";

const TreeExample:React.FC = () => {
  const [array] = useState([
    {
      text: '1', value: '1',
      children: [
        { text: '1.1', value: '1.1' },
        { text: '1.2', value: '1.2' },
        {
          text: '1.3', value: '1.3',
          children: [
            { text: '1.3.1', value: '1.2.1' },
            {
              text: '1.3.2', value: '1.3.2',
              children: [
                { text: '1.3.2.1', value: '1.3.2.1' },
                { text: '1.3.2.2', value: '1.3.2.2' },
              ]
            },
          ]
        }
      ]
    },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
  ])

  return (
    <div style={{width: '60%'}}>
      <Codebox codeString={"code"} header={"展示数据"}>
        <Tree treeData={array} selected={['1.1', '2']} />
      </Codebox>
    </div>
  )
}

export default TreeExample