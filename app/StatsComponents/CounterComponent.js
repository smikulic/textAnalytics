import React from "react";

var CounterComponent = React.createClass({
  displayName: 'CounterComponent',

  render () {
    return (
      <div className="counter">
        {this.props.numberValue}
      </div>
    );
  }
});

export default CounterComponent;
