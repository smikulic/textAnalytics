import React from "react";
import CounterComponent from "./CounterComponent";

var StatsContainerComponent = React.createClass({
  displayName: 'StatsContainerComponent',

  render () {
    let charCount = this.props.stringValue.length;

    return (
      <div className="stats-container">
        <CounterComponent numberValue={charCount} />
      </div>
    );
  }
});

export default StatsContainerComponent;
