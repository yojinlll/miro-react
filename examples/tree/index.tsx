import React, { Fragment, useState } from 'react'
import { Tree } from "@lib/index";
import Codebox from "../utils/codebox/index";

const codeString = `
import React from 'react'
import { Tree } from "miro-react-demo";

const TreeDemo = ()=>{
  const [selected, setSelect]  = useState([])
  const treeData = [
    {
      text: '1', value: '1',
      children: [
        { text: '1.1', value: '1.1' },
        { text: '1.2', value: '1.2' },
        {
          text: '1.3', value: '1.3',
          children: [
            { text: '1.3.1', value: '1.3.1' },
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
    {
      text: '3', value: '3',
      children: [
        { text: '3.1', value: '3.1' },
        { text: '3.2', value: '3.2' },
      ]
    },
  ]

  return <Tree
            treeData={treeData}
            onChange={setSelect}
            selected={selected}
            checkable
            multiple
          />
}
`

const TreeExample:React.FC = () => {
  const [selected, setSelect]  = useState([])
  const treeData = [
    {
      text: '1', value: '1',
      children: [
        { text: '1.1', value: '1.1' },
        { text: '1.2', value: '1.2' },
        {
          text: '1.3', value: '1.3',
          children: [
            { text: '1.3.1', value: '1.3.1' },
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
    {
      text: '3', value: '3',
      children: [
        { text: '3.1', value: '3.1' },
        { text: '3.2', value: '3.2' },
      ]
    },
  ]

  return (
    <Fragment>
      <Codebox codeString={codeString} header={
        <Fragment>
          <h1>Tree</h1>
          <p>基本用法，默认多选，默认展开，可勾选功能。</p>
        </Fragment>
      }>
        <Tree treeData={treeData} onChange={setSelect} selected={selected} checkable multiple />
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
              <td>treeData</td>
              <td>设置树节点数据</td>
              <td>{'Array<{text, value, children}>'}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>selected</td>
              <td>设置选中的树节点</td>
              <td>String[]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>更新节点信息的方法</td>
              <td>{'( values: String[] ) => void'}</td>
              <td>-</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>设置节点可多选</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>checkable</td>
              <td>节点添加复选框</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>expanded</td>
              <td>节点自动展开</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default TreeExample