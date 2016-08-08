import React from "react";
import ReactDom from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from "./js/MainComponents/HeaderComponent";
import FooterComponent from "./js/MainComponents/FooterComponent";
import InputComponent from "./js/MainComponents/InputComponent";
import ResultContainerComponent from "./js/ResultComponents/ResultContainerComponent";

require("./styles/app.scss");

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

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
      <MuiThemeProvider>
        <div className="main-container">
            <HeaderComponent />
            <InputComponent updateInput={this._handleInputUpdate} />
            <ResultContainerComponent stringValue={stringValue} occurances={occurances} />
            <FooterComponent />
        </div>
      </MuiThemeProvider>
    );
  }
});

ReactDom.render(<App />, document.getElementById("app"));
