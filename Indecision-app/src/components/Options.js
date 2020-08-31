import React from "react";
import Option from "./Option";
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3> Your Options</h3>
      <button className="button button--link" onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>

    {props.options.length === 0 && <p className="widget__message"> please add option to get started !!</p>}
    <ol>
      {props.options.map((value, index) => (
        <Option key={index} count={index + 1} optionText={value} handleDeleteOption={props.handleDeleteOption} />
      ))}
    </ol>
  </div>
);
export default Options;
