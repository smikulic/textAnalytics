import React from "react";
import ReactDom from "react-dom";
import InputComponent from "./js/MainComponents/InputComponent";
import ResultContainerComponent from "./js/ResultComponents/ResultContainerComponent";
import StatsContainerComponent from "./js/StatsComponents/StatsContainerComponent";

require("./styles/app.scss");

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
      return {
         inputText: ""
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
          <ResultContainerComponent stringValue={stringValue} />
          <StatsContainerComponent stringValue={stringValue} />
      </div>
    );
  }
});

ReactDom.render(<App />, document.getElementById("app"));
