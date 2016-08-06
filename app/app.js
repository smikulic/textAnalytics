import React from "react";
import ReactDom from "react-dom";
import InputComponent from "./js/MainComponents/InputComponent";
import ResultContainerComponent from "./js/ResultComponents/ResultContainerComponent";
import HeaderComponent from "./js/MainComponents/HeaderComponent";
import FooterComponent from "./js/MainComponents/FooterComponent";

require("./styles/app.scss");

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      inputText: "",
      occurances: {}
    };
  },

  _handleInputUpdate (inputValue, occurancesObject) {
    this.setState({ 
      inputText: inputValue, 
      occurances: occurancesObject 
    });
  },

  render() {
    let stringValue = this.state.inputText;
    let occurances = this.state.occurances;

    return (
      <div className="main-container">
          <HeaderComponent />
          <InputComponent updateInput={this._handleInputUpdate} />
          <ResultContainerComponent stringValue={stringValue} occurances={occurances} />
          <FooterComponent />
      </div>
    );
  }
});

ReactDom.render(<App />, document.getElementById("app"));
