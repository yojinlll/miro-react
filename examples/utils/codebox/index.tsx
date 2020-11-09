import React, { useState } from 'react'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import { Icon } from "@lib/index";
import "./index.scss"

interface props {
  codeString?: string,
  header: React.ReactNode
}

const Codebox: React.FC<props> = (props) => {
  SyntaxHighlighter.registerLanguage('jsx', jsx);
  SyntaxHighlighter.registerLanguage('javascript', javascript);

  const [toggle, setToggle] = useState(false)

  return (
    <div className={'code-box-wrap'}>
      {props.header}
      <div className={`code-box-example ${toggle ? 'active-code' : 'unactive-code'}`}>
        {props.children}
        <div className="code-toggle" onClick={() => setToggle(!toggle)}>
          {<Icon name={toggle ? 'arrow-up' : 'arrow-down'} style={{fill: '#329ff3'}} />}
        </div>
      </div>
      {
        toggle && props.codeString && <div className={'code-box-content'}>
          <SyntaxHighlighter className={'code-box-Highlighter'} language="jsx" style={tomorrow}>
            {props.codeString}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  );
};

export default Codebox