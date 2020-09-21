import React, { Fragment, useState } from "react";
import { Modal } from "@lib/index";

const ModalExample: React.FC = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);
  const xcloseModal = (e: any) => {
    setX(false);
  };
  const ycloseModal = (e: any) => {
    setY(false);
  };
  const zcloseModal = (e: any) => {
    setZ(false);
  };

  return (
    <Fragment>
      <h1>example 1</h1>
      <div>
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
      </div>

      <h1>example 2</h1>
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
      </div>
    </Fragment>
  );
};

export default ModalExample;
