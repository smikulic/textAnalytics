import React from "react";

var CounterComponent = React.createClass({
  displayName: 'CounterComponent',

  render () {
    return (
      <div className="counter">
        <div>{this.props.name}</div>
        <div className="number">{this.props.numberValue}</div>
      </div>
    );
  }
});

export default CounterComponent;
