import React from "react";
import ReactDom from "react-dom";

var InputComponent = React.createClass({
  displayName: 'InputComponent',

  _handleChange (e) {
    let value = e.target.value;
    this.props.updateInput(value);
  },

  render () {
    return (
      <div className="input-text">
        <input type="text" placeholder="Please start typing here..." ref="textInput" onChange={this._handleChange} />
      </div>
    );
  }
});

export default InputComponent;
