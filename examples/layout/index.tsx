import React from "react";
import { Layout, Header, Content, Footer, Aside } from "@lib/index";
import './index.scss'

const LayoutExample: React.FC = () => {
  return (
    <div className={'example'}>
      <div>
        <h1>example 1</h1>
        <Layout className={'example-l'}>
          <Header className={'example-h'}>header</Header>
          <Content className={'example-c'}>content</Content>
          <Footer className={'example-f'}>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 2</h1>
        <Layout className={'example-l'}>
          <Header className={'example-h'}>header</Header>
          <Layout>
            <Aside className={'example-a'}>aside</Aside>
            <Content className={'example-c'}>content</Content>
          </Layout>
          <Footer className={'example-f'}>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 3</h1>
        <Layout className={'example-l'}>
          <Header className={'example-h'}>header</Header>
          <Layout>
            <Content className={'example-c'}>content</Content>
            <Aside className={'example-a'}>aside</Aside>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

      <div>
        <h1>example 4</h1>
        <Layout className={'example-l'}>
          <Aside className={'example-a'}>aside</Aside>
          <Layout>
            <Header className={'example-h'}>header</Header>
            <Content className={'example-c'}>content</Content>
            <Footer className={'example-f'}>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default LayoutExample;
