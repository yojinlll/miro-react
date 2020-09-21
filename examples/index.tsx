import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import IconExample from './icon'
import ButtonExample from './button'
import ModalExample from './modal'

ReactDom.render((
  <Router>
    <div>
      <header>
        <div className="logo">Miro-UI</div>
      </header>
      <div>
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/modal">modal</Link>
            </li>
          </ul>
        </aside>

        <main>
          <Route path="/home"> home </Route>
          <Route path="/icon" component={ IconExample } />
          <Route path="/button" component={ ButtonExample } />
          <Route path="/modal" component={ ModalExample } />
        </main>
      </div>
    </div>
  </Router>
), document.querySelector('#app'))