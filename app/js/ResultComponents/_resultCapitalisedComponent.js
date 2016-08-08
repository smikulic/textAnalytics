import React from "react";

var DisplayCapitalisedComponent = React.createClass({
  displayName: 'DisplayCapitalisedComponent',

  render () {
    return (
      <div>
        <div className="result">{this.props.stringValue.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}</div>
      </div>
    );
  }
});

export default DisplayCapitalisedComponent;
