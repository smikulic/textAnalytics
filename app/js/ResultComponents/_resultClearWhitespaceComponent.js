import React from "react";

var DisplayClearWhitespaceComponent = React.createClass({
  displayName: 'DisplayClearWhitespaceComponent',

  render () {
    return (
      <div>
        <div className="result">{this.props.stringValue.replace(/\s+/g,' ').trim()}</div>
      </div>
    );
  }
});

export default DisplayClearWhitespaceComponent;
