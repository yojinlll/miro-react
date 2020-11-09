import React from 'react'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import './index.scss'

const Guide:React.FC = () => {
  SyntaxHighlighter.registerLanguage('jsx', jsx);
  SyntaxHighlighter.registerLanguage('javascript', javascript);

  return (
    <div className="guide">
      <h1>快速上手</h1>
      <p>一套 PC & Mobile 均适用的组件库，基于react hooks + typeScript 开发，无额外依赖。</p>

      <h3>安装</h3>
      <div className="code-wrap">
      <SyntaxHighlighter className="code-content" language="jsx" style={tomorrow}>{`
  $ yarn add miro-react-demo
  $ npm install miro-react-demo
      `}</SyntaxHighlighter>
      </div>

      <h3>使用</h3>
      <div className="code-wrap">
      <SyntaxHighlighter className="code-content" language="jsx" style={tomorrow}>{`
  import { Button } from "miro-react-demo";

  <Button>button</Button>
      `}</SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Guide