import React from "react";
import ReactDom from "react-dom";
import InputComponent from "./InputComponent";
import DisplayReversedComponent from "./DisplayReversedComponent";

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
      return {
         inputText: " "
      };
  },

  _handleInputUpdate (inputValue) {
    this.setState({ inputText: inputValue });
  },

  render() {
    let stringValue = this.state.inputText;

    return (
      <div className="main-container">
          <InputComponent updateInput={this._handleInputUpdate} />
          <DisplayReversedComponent stringValue={stringValue} />
      </div>
    );
  }
});

ReactDom.render(
  <App />,
  document.getElementById("app")
);
