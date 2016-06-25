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
        <input type="text" placeholder="Input text here..." onChange={this._handleChange} />
      </div>
    );
  }
});

export default InputComponent;
