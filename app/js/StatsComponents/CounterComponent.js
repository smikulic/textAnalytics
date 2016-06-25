import React from "react";

var CounterComponent = React.createClass({
  displayName: 'CounterComponent',

  render () {
    return (
      <div className="col-1-5 counter">
        <div className="label">{this.props.name} count</div>
        <div>{this.props.numberValue}</div>
      </div>
    );
  }
});

export default CounterComponent;
