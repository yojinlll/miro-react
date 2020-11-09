import React, { Fragment, useState } from "react";
import { Modal, Button } from "@lib/index";
import Codebox from "../utils/codebox/index"

import ME1 from "./codeExamples/modal.1"

const ModalExample: React.FC = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  // const [z, setZ] = useState(false);
  // const closeModal = (e: any) => {
  //   setX(false);
  // };
  // const ycloseModal = (e: any) => {
  //   setY(false);
  // };
  // const zcloseModal = (e: any) => {
  //   setZ(false);
  // };

  return (
    <Fragment>
      <h1>Modal</h1>

      <Codebox
        codeString={ME1}
        header={
          <Fragment>
            <p>基本使用。可设置 title，可设置遮罩层，可点击遮罩层关闭。</p>
          </Fragment>
        }
      >
        <Button onClick={() => setX(!x)}>button x</Button>
        <Modal
          visible={x}
          onCancel={()=>{ setX(false); }}
          onConfirm={()=>{ alert('OK!') }}
          title={"Modal X"}
          mask
          maskClosable
          className={'m-modal'}
        >
          <div>test</div>
        </Modal>
      </Codebox>

      <Codebox
        codeString={ME1}
        header={
          <Fragment>
            <p>自定义 Modal</p>
          </Fragment>
        }
      >
        <Button onClick={() => setY(!y)}>button z</Button>
        <Modal
          visible={y}
          style={{ border: "4px solid #f07171", background: "#d1d1fb" }}
          customized={
            <Fragment>
              <div style={{ padding: 20 }}>
                <h1>Modal Y</h1>
                <p>自定义内容</p>
                <Button onClick={()=>{ alert('OK!') }}>ok</Button>
                <Button onClick={()=>{ setY(false) }}>cancel</Button>
              </div>
            </Fragment>
          }
        >hi</Modal>
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
              <td>visible</td>
              <td>对话框是否可见，自行设置</td>
              <td>Boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>对话框默认样式的标题</td>
              <td>String | Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>mask</td>
              <td>设置遮罩层</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>maskClosable</td>
              <td>设置点击遮罩层关闭对话框</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>maskClosable</td>
              <td>设置点击遮罩层关闭对话框</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>customized</td>
              <td>自定义对话框</td>
              <td>React.ReactFragment	</td>
              <td>-</td>
            </tr>
            <tr>
              <td>confirmText</td>
              <td>设置确认按钮文本</td>
              <td>String</td>
              <td>确认</td>
            </tr>
            <tr>
              <td>cancelText</td>
              <td>设置取消按钮文本</td>
              <td>String</td>
              <td>取消</td>
            </tr>
            <tr>
              <td>onConfirm</td>
              <td>点击确认按钮时的回调</td>
              <td>React.MouseEventHandler</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onCancel</td>
              <td>点击取消按钮时的回调</td>
              <td>React.MouseEventHandler</td>
              <td>-</td>
            </tr>
            <tr>
              <td>className</td>
              <td>自定义类名</td>
              <td>String</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ModalExample;
