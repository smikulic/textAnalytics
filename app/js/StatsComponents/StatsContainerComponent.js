import React from "react";
import CounterComponent from "./CounterComponent";

var StatsContainerComponent = React.createClass({
  displayName: 'StatsContainerComponent',

  _calculateReadTime (wordCount, averageWordsPerMinute) {
    let wordsPerAverage = wordCount / averageWordsPerMinute;
    let result = wordsPerAverage.toPrecision(2) + ' min';

    if (wordsPerAverage < 1) {
      result = (wordsPerAverage * 60).toPrecision(2) + ' s';
    }

    return result;
  },

  render () {
    let textEntered = this.props.stringValue;
    let charCount = textEntered.length;
    let wordCount = 0;
    let sentenceCount = 0;
    let readTime = 0;
    let averageWordsPerMinute = 275;

    if (charCount > 0) {
      wordCount = textEntered.split(' ').length;
    }

    if (wordCount > 0) {
      sentenceCount = ( textEntered.match(/\w[.?!](\s|$)/g) || [] ).length;
      readTime = this._calculateReadTime(wordCount, averageWordsPerMinute);
    }

    return (
      <div className="stats-container">
        <CounterComponent name="Character count" numberValue={charCount} />
        <CounterComponent name="Word count" numberValue={wordCount} />
        <CounterComponent name="Sentence count" numberValue={sentenceCount} />
        <CounterComponent name="Read time" numberValue={readTime} />
      </div>
    );
  }
});

export default StatsContainerComponent;
