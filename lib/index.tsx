import React  from 'react'
import ReactDom from "react-dom";
// import Button from "./button";
import Icon from "./icon/icon";

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target, (e.target as SVGUseElement).href)
}

ReactDom.render(<div>
  <Icon name="github"
    className='icon-1 icon-2'
    onClick={ fn }
    onMouseEnter={ (e) => console.log('onMouse-Enter') }
    onMouseLeave={ (e) => console.log('onMouse-Leave') }
  />
  <Icon name="game" />
</div>, document.body.querySelector('#app'))