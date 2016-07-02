import React from "react";

var InputComponent = React.createClass({
  displayName: 'InputComponent',

  _handleChange (e) {
    let value = e.target.value;
    this.props.updateInput(value);
  },

  render () {
    return (
      <div className="input-text">
        <textarea placeholder="Input text here..." onChange={this._handleChange}></textarea>
      </div>
    );
  }
});

export default InputComponent;
