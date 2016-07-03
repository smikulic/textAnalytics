import React from "react";

var DisplayUppercasedComponent = React.createClass({
  displayName: 'DisplayUppercasedComponent',

  render () {
    return (
      <div className="result-uppercased">
        <div className="result">{this.props.stringValue.toUpperCase()}</div>
      </div>
    );
  }
});

export default DisplayUppercasedComponent;
