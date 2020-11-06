import React, { Fragment, useState } from "react";
import { Modal } from "@lib/index";
import Codebox from "../utils/codebox/index"

import ME1 from "./codeExamples/modal.1"

const ModalExample: React.FC = () => {
  const [x, setX] = useState(false);
  // const [y, setY] = useState(false);
  // const [z, setZ] = useState(false);
  const xcloseModal = (e: any) => {
    setX(false);
  };
  // const ycloseModal = (e: any) => {
  //   setY(false);
  // };
  // const zcloseModal = (e: any) => {
  //   setZ(false);
  // };

  return (
    <Fragment>
      <Codebox
        codeString={ME1}
        header={
          <Fragment>
            <h1>Live demo</h1>
            <p>{'A modal with header, body, and set of actions in the footer. Use <Modal/> in combination with other components to show or hide your Modal. The <Modal/> Component comes with a few convenient "sub components": <Modal.Header/>, <Modal.Title/>, <Modal.Body/>, and <Modal.Footer/>, which you can use to build the Modal content.'}</p>
          </Fragment>
        }
      >
        <button onClick={() => setX(!x)}>button x</button>
        <Modal
          visible={x}
          onCancel={xcloseModal}
          title={"title x"}
          mask={false}
          className={'m-modal'}
        >
          <div>test</div>
        </Modal>
      </Codebox>

      {/* <h1>example 2</h1>
      <div>
        <button onClick={() => setY(!y)}>button y</button>
        <Modal
          visible={y}
          title={"title y"}
          onCancel={ycloseModal}
          maskClosable={true}
        >
          <div>test</div>
        </Modal>
      </div>

      <h1>example 3</h1>
      <div>
        <button onClick={() => setZ(!z)}>button z</button>
        <Modal
          visible={z}
          customized={
            <Fragment>
              <h1>title z</h1>
              <button onClick={zcloseModal}>ok</button>
              <button onClick={zcloseModal}>cancel</button>
            </Fragment>
          }
          style={{ border: "4px solid #f07171", background: "#d1d1fb" }}
        />
      </div> */}

      <h1>API</h1>
      <div className="api-wrap">
        <table className="api-table">
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>closeLabel</td>
              <td>string</td>
              <td>'Close alert'	</td>
              <td>Renders a properly aligned dismiss button, as well as adding extra horizontal padding to the Alert.</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ModalExample;
