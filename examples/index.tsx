import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Header, Content, Footer, Aside } from "@lib/index";
// import IconExample from "./icon";
import ButtonExample from "./button";
import ModalExample from "./modal";
import LayoutExample from "./layout";

ReactDom.render(
  <Router>
    <div>
      <Layout>
        <Header>
          <div className="logo">Miro-UI</div>
        </Header>
        <Layout>
          <Aside style={{border: '1px solid red'}}>
            <h2>组件</h2>
            <ul>
              <li>
                <Link to="/home">home</Link>
              </li>
              {/* <li>
                <Link to="/icon">Icon</Link>
              </li> */}
              <li>
                <Link to="/button">Button</Link>
              </li>
              <li>
                <Link to="/modal">modal</Link>
              </li>
              <li>
                <Link to="/layout">layout</Link>
              </li>
            </ul>
          </Aside>
          <Content>
            <Route path="/home"> home </Route>
            {/* <Route path="/icon" component={IconExample} /> */}
            <Route path="/button" component={ButtonExample} />
            <Route path="/modal" component={ModalExample} />
            <Route path="/layout" component={LayoutExample} />
          </Content>
        </Layout>
        <Footer>
          footer
        </Footer>
      </Layout>
    </div>
  </Router>,
  document.querySelector("#app")
);
