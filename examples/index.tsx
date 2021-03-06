import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, NavLink, useLocation, Redirect, Switch } from "react-router-dom";
import "./index.scss"
import { Layout, Header, Content, Aside, Icon } from "@lib/index";
import Guide from "./guide";
import IconExample from "./iconExample";
import ButtonExample from "./button";
import ModalExample from "./modal";
import LayoutExample from "./layout";
import FormExample from "./form";
import InputExample from "./input";
import TreeExample from "./tree";
import './logo.svg'

interface NavProps {
  jumpHandle: React.Dispatch<React.SetStateAction<Boolean>>
  className?: string
}

const Nav: React.FC<NavProps> = (props) => {
  const location = useLocation()
  
  useEffect(() => {
    props.jumpHandle(false)
  }, [location])

  return (
    <ul className={props.className}>
      <li>
        <NavLink to="/guide">快速上手</NavLink>
      </li>
      <li>
        <NavLink to="/button">Button</NavLink>
      </li>
      <li>
        <NavLink to="/icon">Icon</NavLink>
      </li>
      <li>
        <NavLink to="/modal">Modal</NavLink>
      </li>
      <li>
        <NavLink to="/layout">Layout</NavLink>
      </li>
      <li>
        <NavLink to="/input">Input</NavLink>
      </li>
      <li>
        <NavLink to="/form">Form</NavLink>
      </li>
      <li>
        <NavLink to="/tree">Tree</NavLink>
      </li>
    </ul>
  )
}

const Page: React.FC = () => {
  const [isNavToggle, setNavToggle] = useState(false)
  
  const onToggle = ()=>{
    setNavToggle(!isNavToggle)
  }

  return (
    <Router>
      <Layout style={{ minHeight: '100vh'}}>
          <Header className={'site-header'}>
            <div className="flex-a-c">
              <Icon name="logo" className={'logo'} />
              <span>Miro-UI</span>
            </div>
            <div className="menu-wrap" onClick={onToggle}>
              <div className="menu">
              </div>
            </div>
          </Header>
          <Layout>
            <Aside className={'site-aside'}>
              <Nav jumpHandle={setNavToggle} className='is-pc' />
            </Aside>

            <Content className={'site-content'}>
              <div className={`mobile-nav ${isNavToggle ? 'active' : ''}`}>
                <Nav jumpHandle={setNavToggle} />
              </div>
              <div className={'site-content-inner'}>
                <Switch>
                  <Redirect exact from="/" to="/guide" />
                  <Route path="/guide" component={Guide} />
                  <Route path="/button" component={ButtonExample} />
                  <Route path="/icon" component={IconExample} />
                  <Route path="/modal" component={ModalExample} />
                  <Route path="/layout" component={LayoutExample} />
                  <Route path="/input" component={InputExample} />
                  <Route path="/form" component={FormExample} />
                  <Route path="/tree" component={TreeExample} />
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
    </Router>
  )
}

ReactDom.render(<Page />, document.querySelector("#app"));
