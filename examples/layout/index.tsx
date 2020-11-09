import React, { Fragment } from "react";
import { Layout, Header, Content, Footer, Aside } from "@lib/index";
import './index.scss'
import Codebox from '../utils/codebox/index';

const codeString1 = `
import { Layout, Header, Content, Footer, Aside } from "miro-react-dmeo";

const LayoutDemo = () => {
  return (
    <Layout className={'example-l'}>
      <Header className={'example-h'}>header</Header>
      <Content className={'example-c'}>content</Content>
      <Footer className={'example-f'}>footer</Footer>
    </Layout>
  )
}
`
const codeString2 = `
import { Layout, Header, Content, Footer, Aside } from "miro-react-dmeo";

const LayoutDemo = () => {
  return (
    <Layout className={'example-l'}>
      <Header className={'example-h'}>header</Header>
      <Layout>
        <Aside className={'example-a'}>aside</Aside>
        <Content className={'example-c'}>content</Content>
      </Layout>
      <Footer className={'example-f'}>footer</Footer>
    </Layout>
  )
}
`

const codeString3 = `
import { Layout, Header, Content, Footer, Aside } from "miro-react-dmeo";

const LayoutDemo = () => {
  return (
    <Layout className={'example-l'}>
      <Aside className={'example-a'}>aside</Aside>
      <Layout>
        <Header className={'example-h'}>header</Header>
        <Content className={'example-c'}>content</Content>
        <Footer className={'example-f'}>footer</Footer>
      </Layout>
    </Layout>
  )
}
`

const LayoutExample: React.FC = () => {
  return (
    <Fragment>
      <h1>Layout</h1>

      <Codebox
        codeString={codeString1}
        header={ <p>上中下布局</p> }
      >
        <Layout className={'example-l'}>
          <Header className={'example-h'}>header</Header>
          <Content className={'example-c'}>content</Content>
          <Footer className={'example-f'}>footer</Footer>
        </Layout>
      </Codebox>

      <Codebox
        codeString={codeString2}
        header={ <p>上中下布局 - 侧边栏</p> }
      >
        <Layout className={'example-l'}>
          <Header className={'example-h'}>header</Header>
          <Layout>
            <Aside className={'example-a'}>aside</Aside>
            <Content className={'example-c'}>content</Content>
          </Layout>
          <Footer className={'example-f'}>footer</Footer>
        </Layout>
      </Codebox>

      <Codebox
        codeString={codeString3}
        header={ <p>左右布局</p> }
      >
        <Layout className={'example-l'}>
          <Aside className={'example-a'}>aside</Aside>
          <Layout>
            <Header className={'example-h'}>header</Header>
            <Content className={'example-c'}>content</Content>
            <Footer className={'example-f'}>footer</Footer>
          </Layout>
        </Layout>
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
              <td>style</td>
              <td>自定义样式</td>
              <td>React.CSSProperties</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default LayoutExample;
