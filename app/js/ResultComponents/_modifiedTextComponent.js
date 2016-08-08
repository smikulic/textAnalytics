import React from "react";
import DisplayUppercasedComponent from "./_resultUppercasedComponent";
import DisplayLowercasedComponent from "./_resultLowercasedComponent";
import DisplayReversedComponent from "./_resultReversedComponent";
import ResultClearWhitespaceComponent from "./_resultClearWhitespaceComponent";
import ResultCapitalisedComponent from "./_resultCapitalisedComponent";

var ModifiedTextComponent = React.createClass({
  displayName: 'ModifiedTextComponent',

  render () {
    let displayNode = null;
    console.log(this.props.action)
    switch(this.props.action) {
      case 'Reversed':
        displayNode = <DisplayReversedComponent stringValue={this.props.stringValue} />;
        break;
      case 'Uppercase':
        displayNode = <DisplayUppercasedComponent stringValue={this.props.stringValue} />;
        break;
      case 'Lowercase':
        displayNode = <DisplayLowercasedComponent stringValue={this.props.stringValue} />;
        break;
      case 'Clear Extra Whitespace':
        displayNode = <ResultClearWhitespaceComponent stringValue={this.props.stringValue} />;
        break;
      case 'Capitalize':
        displayNode = <ResultCapitalisedComponent stringValue={this.props.stringValue} />;
        break;
    }


    return (
      <div>
        {displayNode}
      </div>
    );
  }
});

export default ModifiedTextComponent;
