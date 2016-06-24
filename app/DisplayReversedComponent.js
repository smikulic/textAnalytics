import React from "react";

var DisplayReversedComponent = React.createClass({
  displayName: 'DisplayReversedComponent',

  render () {
    return (
      <div className="display display-reversed">
        {this.props.stringValue.split("").reverse().join("")}
      </div>
    );
  }
});

export default DisplayReversedComponent;
