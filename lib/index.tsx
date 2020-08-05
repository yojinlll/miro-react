import React from 'react'
import ReactDom from "react-dom";
// import Button from "./button";
import Icon from "./icon/icon";

ReactDom.render(<div>
  <Icon name="github" />
  <Icon name="game" />
</div>, document.body.querySelector('#app'))