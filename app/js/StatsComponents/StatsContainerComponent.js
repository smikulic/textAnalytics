import React from "react";
import CounterComponent from "./CounterComponent";

var StatsContainerComponent = React.createClass({
  displayName: 'StatsContainerComponent',

  render () {
    let textEntered = this.props.stringValue;
    let charCount = textEntered.length;
    let wordCount = 0;
    let sentenceCount = 0;

    if (charCount > 0) {
      wordCount = textEntered.split(' ').length;
    }

    if (wordCount > 0) {
      sentenceCount = ( textEntered.match(/\w[.?!](\s|$)/g) || [] ).length;
    }

    return (
      <div className="stats-container">
        <CounterComponent name="Character" numberValue={charCount} />
        <CounterComponent name="Word" numberValue={wordCount} />
        <CounterComponent name="Sentence" numberValue={sentenceCount} />
      </div>
    );
  }
});

export default StatsContainerComponent;
