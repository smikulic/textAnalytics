import React from "react";

var HeaderComponent = React.createClass({
  displayName: 'HeaderComponent',

  render () {
    return (
      <div className="header">
        <h1>Improve Your Writing!</h1>
        <p>Measure and improve the readability and marketing content of your writing with this tool.</p>
      </div>
    );
  }
});

export default HeaderComponent;
