import React from "react";

var GreetingComponent = React.createClass({
  render: function() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
});

export default GreetingComponent;
