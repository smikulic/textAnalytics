import React from "react";
import CounterComponent from "./_counterComponent";

var ResultStatsComponent = React.createClass({
  displayName: 'ResultStatsComponent',

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
    let wordOccurances = this.props.occurances;
    let sortedWordOccurances = [];
    let topWordOccurancesLimit = 5;
    let topWordOccurances = {};
    let topWordsDisplay = null;
    let charCount = textEntered.length;
    let wordCount = 0;
    let sentenceCount = 0;
    let readTime = 0;
    let averageWordsPerMinute = 275;

    // Character count
    if (charCount > 0) {
      wordCount = textEntered.split(' ').length;
    }

    // Word count
    if (wordCount > 0) {
      sentenceCount = ( textEntered.match(/\w[.?!](\s|$)/g) || [] ).length;
      readTime = this._calculateReadTime(wordCount, averageWordsPerMinute);
    }

    // Top five word occurances
    for (var word in wordOccurances) {
      console.log(word)
      sortedWordOccurances.push([word, wordOccurances[word]])
      sortedWordOccurances.sort(
        function(a, b) {
          return a[1] - b[1]
        }
      )
    }

    if (sortedWordOccurances.length > topWordOccurancesLimit) {
      topWordOccurances = sortedWordOccurances.slice(sortedWordOccurances.length - topWordOccurancesLimit, sortedWordOccurances.length);  
    } else {
      topWordOccurances = sortedWordOccurances;
    }

    topWordsDisplay = topWordOccurances.map( (wordData, index) => {
      let key = "occurance-" + index;
      let result = (
        <li key={key}>{wordData[0]}: {wordData[1]}</li>
      );

      return result;
    });


    return (
      <div className="stats-container">
        <div className="col-1-4">
          <CounterComponent name="Characters" numberValue={charCount} />
          <CounterComponent name="Words" numberValue={wordCount} />
        </div>
        <div className="col-1-4">
          <CounterComponent name="Sentences" numberValue={sentenceCount} />
          <CounterComponent name="Read time" numberValue={readTime} />
        </div>
        <div className="col-4-4">
          Keyword occurances: 
          <ul>{topWordsDisplay}</ul>
        </div>
      </div>
    );
  }
});

export default ResultStatsComponent;
