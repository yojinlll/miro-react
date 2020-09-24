import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import "./index.scss"
import { Layout, Header, Content, Aside, Icon } from "@lib/index";
import IconExample from "./iconExample";
import ButtonExample from "./button";
import ModalExample from "./modal";
import LayoutExample from "./layout";
import FormExample from "./form";
import './logo.svg'

ReactDom.render(
  <Router>
    <div>
      <Layout style={{ minHeight: '100vh'}}>
        <Header className={'site-header'}>
          <Icon name="logo" className={'logo'} />
          <span>Miro-UI</span>
        </Header>
        <Layout className={'site-content-wrap'}>
          <Aside className={'site-aside'}>
            <h2>Components</h2>
            <ul>
              <li>
                <NavLink to="/home">home</NavLink>
              </li>
              <li>
                <NavLink to="/icon">Icon</NavLink>
              </li>
              <li>
                <NavLink to="/button">Button</NavLink>
              </li>
              <li>
                <NavLink to="/modal">modal</NavLink>
              </li>
              <li>
                <NavLink to="/layout">layout</NavLink>
              </li>
              <li>
                <NavLink to="/form">form</NavLink>
              </li>
            </ul>
          </Aside>
          <Content className={'site-content'}>
            <Route path="/home"> home </Route>
            <Route path="/icon" component={IconExample} />
            <Route path="/button" component={ButtonExample} />
            <Route path="/modal" component={ModalExample} />
            <Route path="/layout" component={LayoutExample} />
            <Route path="/form" component={FormExample} />
          </Content>
        </Layout>
      </Layout>
    </div>
  </Router>,
  document.querySelector("#app")
);
