import React from "react";

var DisplayLowercasedComponent = React.createClass({
  displayName: 'DisplayLowercasedComponent',

  render () {
    return (
      <div className="result-lowercased">
        <div className="result">{this.props.stringValue.toLowerCase()}</div>
      </div>
    );
  }
});

export default DisplayLowercasedComponent;
