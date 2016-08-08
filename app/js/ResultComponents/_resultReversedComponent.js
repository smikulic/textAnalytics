import React from "react";

var DisplayReversedComponent = React.createClass({
  displayName: 'DisplayReversedComponent',

  render () {
    return (
      <div className="result-reversed">
        <div className="result">{this.props.stringValue.split("").reverse().join("")}</div>
      </div>
    );
  }
});

export default DisplayReversedComponent;
