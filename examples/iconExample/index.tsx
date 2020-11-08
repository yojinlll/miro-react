import React, { Fragment } from "react";
import "./index.scss"
import { Icon } from "@lib/index";
import Codebox from '../utils/codebox';

const codeString = `
<Icon name="github" />
<Icon name="game" />
<Icon name="favorite-filling" style={{fill: '#f1bd69'}} />
`

const IconExample: React.FC = () => {
  return (
    <Fragment>
      <Codebox
        codeString={codeString}
        header={
          <Fragment>
            <h1>Icon</h1>
          </Fragment>
        }
      >
        <Icon name="github" style={{marginRight: 12}} />
        <Icon name="game" style={{marginRight: 12}} />
        <Icon name="favorite-filling" style={{fill: '#f1bd69'}} />
      </Codebox>

      <div className="icon-table-wrap">
        <table className="icon-table">
          <tbody>
            <tr>
              <td>
                <Icon name="github" />
                <div>github</div>
              </td>
              <td>
                <Icon name="game" />
                <div>game</div>
              </td>
              <td>
                <Icon name="browse" />
                <div>browse</div>
              </td>
              <td>
                <Icon name="close" />
                <div>close</div>
              </td>
            </tr>
            <tr>
              <td>
                <Icon name="up" />
                <div>up</div>
              </td>
              <td>
                <Icon name="down" />
                <div>down</div>
              </td>
              <td>
                <Icon name="left" />
                <div>left</div>
              </td>
              <td>
                <Icon name="right" />
                <div>right</div>
              </td>
            </tr>
            <tr>
              <td>
                <Icon name="arrow-up" />
                <div>arrow-up</div>
              </td>
              <td>
                <Icon name="arrow-down" />
                <div>arrow-down</div>
              </td>
              <td>
                <Icon name="arrow-left" />
                <div>arrow-left</div>
              </td>
              <td>
                <Icon name="arrow-right" />
                <div>arrow-right</div>
              </td>
            </tr>
            <tr>
              <td>
                <Icon name="favorite" />
                <div>favorite</div>
              </td>
              <td>
                <Icon name="favorite-filling" />
                <div>favorite-filling</div>
              </td>
              <td>
                <Icon name="check-item" />
                <div>check-item</div>
              </td>
              <td>
                <Icon name="check-item-filling" />
                <div>check-item-filling</div>
              </td>
            </tr>
            <tr>
              <td>
                <Icon name="back" />
                <div>back</div>
              </td>
              <td>
                <Icon name="smile" />
                <div>smile</div>
              </td>
              <td>
                <Icon name="meh" />
                <div>meh</div>
              </td>
              <td>
                <Icon name="cry" />
                <div>cry</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default IconExample;
