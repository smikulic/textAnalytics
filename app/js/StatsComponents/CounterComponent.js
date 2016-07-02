import React from "react";

var CounterComponent = React.createClass({
  displayName: 'CounterComponent',

  render () {
    return (
      <div className="counter">
        <span className="label">{this.props.name}: </span>
        <span>{this.props.numberValue}</span>
      </div>
    );
  }
});

export default CounterComponent;
