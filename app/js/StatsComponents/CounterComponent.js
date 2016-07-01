import React from "react";

var CounterComponent = React.createClass({
  displayName: 'CounterComponent',

  render () {
    return (
      <div className="col-1-4 counter">
        <div className="label">{this.props.name}</div>
        <div>{this.props.numberValue}</div>
      </div>
    );
  }
});

export default CounterComponent;
